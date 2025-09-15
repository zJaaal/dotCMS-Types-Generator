export const RELATIONSHIP_FLAG = 'com.dotcms.contenttype.model.field.ImmutableRelationshipField';
export const BLOCK_EDITOR_FLAG = 'com.dotcms.contenttype.model.field.ImmutableStoryBlockField';

/**
 * Mapping of dotCMS field class names to TypeScript native types
 * Based on analysis of field schema and actual content data
 */
export const FIELD_TYPE_MAPPING = {
    'com.dotcms.contenttype.model.field.ImmutableBinaryField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableStoryBlockField': 'BlockEditorContent',
    'com.dotcms.contenttype.model.field.ImmutableCategoryField': 'Array<Record<string, string>>',
    'com.dotcms.contenttype.model.field.ImmutableCheckboxField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableCustomField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableDateField': 'number',
    'com.dotcms.contenttype.model.field.ImmutableDateTimeField': 'number',
    'com.dotcms.contenttype.model.field.ImmutableFileField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableImageField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableJSONField': 'Record<string, unknown>',
    'com.dotcms.contenttype.model.field.ImmutableKeyValueField': 'Record<string, string>',
    'com.dotcms.contenttype.model.field.ImmutableMultiSelectField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableRadioField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableRelationshipField': 'FETCH_THE_TYPES',
    'com.dotcms.contenttype.model.field.ImmutableSelectField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableHostFolderField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableTagField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableTextField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableTextAreaField': 'string',
    'com.dotcms.contenttype.model.field.ImmutableTimeField': 'number',
    'com.dotcms.contenttype.model.field.ImmutableWysiwygField': 'string'
} as const;
