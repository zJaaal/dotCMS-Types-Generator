#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { parseArgs } from './lib/generator/args/parser.js';
import { fetchStructure } from './lib/generator/fetch/index.js';
import { checkFolder } from './lib/generator/types-gen/check-folder.js';
import { genType } from './lib/generator/types-gen/gen-type.js';
import { ContentTypeStructure } from './lib/shared/types.js';

const args = process.argv.slice(2);

const { contentTypes, host, token, target } = parseArgs(args);

const folderPath = await checkFolder(target);

const fetchRecursiveStructures = async (
    contentType: string,
    structures: Record<string, ContentTypeStructure[]> = {}
) => {
    console.log(`📡 Fetching ${contentType}...`);
    const contentTypeStructure = await fetchStructure({
        contentType,
        host,
        token
    });

    structures[contentType] = contentTypeStructure;

    for (const field of contentTypeStructure) {
        if (field?.relationships?.velocityVar) {
            const cleanVelocityVar = field.relationships.velocityVar.split('.')[0] || 'unknown';

            field.relationships.velocityVar = cleanVelocityVar;

            if (cleanVelocityVar === 'unknown') {
                console.log(`❌ ${cleanVelocityVar} is unknown`);
                continue;
            } else if (structures[cleanVelocityVar]) {
                console.log(`✅ ${cleanVelocityVar} already fetched`);
                continue;
            }

            console.log(`🔗 Found relationship ${cleanVelocityVar}...`);
            const relationshipStructure = await fetchRecursiveStructures(
                cleanVelocityVar,
                structures
            );

            if (relationshipStructure) {
                structures = { ...structures, ...relationshipStructure };
            }
        }
    }

    console.log(`✅ ${contentType} fetched successfully`);

    return structures;
};

// Execute requests sequentially - more controlled and server-friendly
const fetchAllStructures = async () => {
    let structures: Record<string, ContentTypeStructure[]> = {};
    try {
        console.log('🚀 Fetching structures sequentially...');

        for (const contentType of contentTypes) {
            try {
                if (structures[contentType]) {
                    console.log(`✅ ${contentType} already fetched`);
                    continue;
                }

                structures = await fetchRecursiveStructures(contentType, structures);
            } catch (error) {
                console.error(`❌ Failed to fetch ${contentType}:`, error);
                // Continue with next content type instead of stopping
            }
        }

        console.log('🏁 Finished processing all requests');
    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }

    return structures;
};

fetchAllStructures().then((ct) => {
    for (const contentType of Object.keys(ct)) {
        const fields = ct[contentType];
        console.log('🔍 Generating type for', contentType);
        const type = genType(contentType, fields as ContentTypeStructure[]);

        fs.writeFileSync(path.join(folderPath, `${contentType}.ts`), type);
        console.log('✅ Type generated for', contentType);
    }

    console.log('🏁 Finished generating types');
});
