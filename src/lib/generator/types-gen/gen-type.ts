import path from 'path';
import {
    RELATIONSHIP_FLAG,
    FIELD_TYPE_MAPPING,
    BLOCK_EDITOR_FLAG
} from '../../shared/field-type-mapping.js';
import { ContentTypeStructure } from '../../shared/types.js';

const genTypeProperties = (fields: ContentTypeStructure[]) => {
    return fields
        .map((structure) => {
            const key = `${structure.variable}${structure.required ? '' : '?'}`;

            if (structure.clazz === RELATIONSHIP_FLAG) {
                return `  ${key}: DotCMS${structure.relationships.velocityVar}[]`;
            } else if (FIELD_TYPE_MAPPING[structure.clazz as keyof typeof FIELD_TYPE_MAPPING]) {
                return `  ${key}: ${
                    FIELD_TYPE_MAPPING[structure.clazz as keyof typeof FIELD_TYPE_MAPPING]
                }`;
            } else {
                return ``;
            }
        })
        .filter((property) => property !== '')
        .join('\n');
};

export const genHeader = (contentType: string, fields: ContentTypeStructure[]) => {
    const relationships = fields.filter(
        (field) =>
            field.clazz === RELATIONSHIP_FLAG && field.relationships.velocityVar !== contentType
    );

    const relationshipsImports =
        relationships
            .map(
                (relationship) =>
                    `import { DotCMS${relationship.relationships.velocityVar} } from "./${relationship.relationships.velocityVar}";`
            )
            .join('\n') || '';

    const dotmcsImport = fields.find((field) => field.clazz === BLOCK_EDITOR_FLAG)
        ? 'import { BlockEditorContent, DotCMSBasicContentlet } from "@dotcms/types";'
        : 'import { DotCMSBasicContentlet } from "@dotcms/types";';

    return relationshipsImports.length > 0
        ? `${dotmcsImport}\n${relationshipsImports}`
        : `${dotmcsImport}`;
};

export const genType = (contentType: string, fields: ContentTypeStructure[]) => {
    return `${genHeader(
        contentType,
        fields
    )}\n\nexport interface DotCMS${contentType} extends DotCMSBasicContentlet {\n${genTypeProperties(
        fields
    )}\n}`;
};
