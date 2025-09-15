const typescript = require('@rollup/plugin-typescript');
const copy = require('rollup-plugin-copy');

// Our output path
const outputPath = 'dist/bin/types-gen';

// Our common input options, all configs will use these plugins
const commonInputOptions = {
    input: 'src/index.ts', // The entry point of our library
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: false, // We'll generate declarations separately
            module: 'esnext', // Ensure TypeScript outputs modern JavaScript modules
            target: 'es2022' // Using modern JavaScript features
        }),
        // Copy the package.json to the dist folder and fix the bin path
        copy({
            targets: [
                {
                    src: 'package.json',
                    dest: 'dist',
                    transform: (contents: Buffer | string) => {
                        const json = JSON.parse(contents.toString());

                        // Fix bin paths - remove 'dist/' prefix since we're already in dist/
                        if (json.bin) {
                            Object.keys(json.bin).forEach((key) => {
                                json.bin[key] = json.bin[key].replace('./dist/', './');
                            });
                        }

                        return JSON.stringify(json, null, 2);
                    }
                }
            ]
        })
    ]
};

// Our common output options, all configs will use these options
const commonOutputOptions = {
    sourcemap: true,
    preserveModules: false // This ensures everything is bundled into one file
};

const config = [
    {
        ...commonInputOptions,
        output: [
            {
                ...commonOutputOptions,
                name: 'dotcmsClient',
                file: `${outputPath}.js`,
                format: 'es'
            }
        ]
    }
];

module.exports = config;
