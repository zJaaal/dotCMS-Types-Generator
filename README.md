# dotCMS Types Generator (POC)

A Proof of Concept TypeScript type generator for dotCMS content types. This tool automatically fetches content type structures from your dotCMS instance and generates TypeScript interfaces that match your content types, including support for relationships and all dotCMS field types.

## Features

- 🚀 **Automatic Type Generation**: Generates TypeScript interfaces from dotCMS content types
- 🔗 **Relationship Support**: Automatically resolves and generates types for related content types
- 📝 **Complete Field Mapping**: Supports all dotCMS field types with proper TypeScript mappings
- 🌐 **API Integration**: Fetches live schema data directly from your dotCMS instance
- 🎯 **CLI Tool**: Simple command-line interface for easy integration

## Setup

### Prerequisites
- Node.js 16+ required
- Access to a dotCMS instance with API token

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dotCMS-Types-Generator

# Install dependencies
npm install

# Build the project
npm run build
```

After building, the CLI tool will be available at `./dist/bin/types-gen.js`

## Usage

The tool uses a simple command-line interface with required parameters:

```bash
npx dot-types --host=https://your-dotcms-instance.com --contentTypes=Blog,Author,Category --token=your-api-token --target=./src/types
```

### Required Parameters

- `--host`: Your dotCMS instance URL (e.g., `https://demo.dotcms.com`)
- `--contentTypes`: Comma-separated list of content type variable names to generate types for
- `--token`: Your dotCMS API authentication token
- `--target`: Target directory where TypeScript files will be generated

### Example

```bash
# Generate types for Blog and Author content types
npx dot-types \
  --host=https://demo.dotcms.com \
  --contentTypes=Blog,BlogAuthor \
  --token=your-api-token-here \
  --target=./generated-types
```

This will create:
- `./generated-types/Blog.ts`
- `./generated-types/BlogAuthor.ts`

## Generated Type Structure

The tool generates TypeScript interfaces that extend `DotCMSBasicContentlet` and include all your content type fields with proper typing:

```typescript
import { DotCMSBasicContentlet } from "@dotcms/types";
import { DotCMSBlogAuthor } from "./BlogAuthor";

export interface DotCMSBlog extends DotCMSBasicContentlet {
  title: string;
  body: string;
  publishDate: number;
  author: DotCMSBlogAuthor[];
  tags?: string;
  featured: string;
}
```

## Supported Field Types

The generator maps dotCMS field types to appropriate TypeScript types:

| dotCMS Field Type | TypeScript Type |
|-------------------|----------------|
| Text Field | `string` |
| Textarea Field | `string` |
| WYSIWYG Field | `string` |
| Date Field | `number` |
| Date/Time Field | `number` |
| Time Field | `number` |
| Checkbox Field | `string` |
| Radio Field | `string` |
| Select Field | `string` |
| Multi-Select Field | `string` |
| Binary Field | `string` |
| File Field | `string` |
| Image Field | `string` |
| Tag Field | `string` |
| Category Field | `Array<Record<string, string>>` |
| JSON Field | `Record<string, unknown>` |
| Key/Value Field | `Record<string, string>` |
| Story Block Field | `BlockEditorContent` |
| Relationship Field | `DotCMS{RelatedType}[]` |

## How It Works

1. **Fetches Content Type Structure**: Uses dotCMS REST API to get field definitions
2. **Resolves Relationships**: Automatically discovers and fetches related content types
3. **Generates TypeScript**: Creates properly typed interfaces with imports
4. **Handles Dependencies**: Manages circular relationships and missing types

## Relationship Handling

The tool automatically detects and resolves content type relationships:

- **Automatic Discovery**: When a content type has relationship fields, the tool automatically fetches the related content types
- **Recursive Resolution**: Handles nested relationships (relationships that have their own relationships)
- **Import Generation**: Automatically generates the necessary import statements
- **Circular Reference Safe**: Prevents infinite loops in circular relationships

## Authentication

You'll need a dotCMS API token to use this tool:

1. Log into your dotCMS backend
2. Go to System → API Tokens
3. Create a new token with appropriate permissions
4. Use this token with the `--token` parameter

## Development

### Building

```bash
# Clean and build
npm run build

# This creates ./dist/bin/types-gen.js which is the executable CLI tool
```

### Project Structure

```
src/
├── index.ts                    # Main CLI entry point
├── lib/
│   ├── client/                 # dotCMS API client
│   ├── generator/
│   │   ├── args/              # Command line argument parsing
│   │   ├── fetch/             # API data fetching
│   │   └── types-gen/         # TypeScript generation logic
│   └── shared/                # Shared types and utilities
```

### Dependencies

- `@dotcms/types`: Official dotCMS TypeScript types
- `@rollup/plugin-typescript`: Build tooling
- Various build dependencies for bundling

## Example Output

Running the tool will show progress like this:

```
🚀 Fetching structures sequentially...
📡 Fetching Blog...
🔗 Found relationship BlogAuthor...
📡 Fetching BlogAuthor...
✅ BlogAuthor fetched successfully
✅ Blog fetched successfully
🏁 Finished processing all requests
🔍 Generating type for Blog
✅ Type generated for Blog
🔍 Generating type for BlogAuthor
✅ Type generated for BlogAuthor
🏁 Finished generating types
```

## Limitations (POC Status)

- This is a proof of concept - not production ready
- Limited error handling for edge cases
- No configuration file support yet
- No watch mode for development
- Basic CLI argument validation

## Future Enhancements

- Configuration file support (.dotcms-types.json)
- Watch mode for development
- Better error handling and validation
- Support for custom type mappings
- Integration with build tools (Webpack, Vite, etc.)
