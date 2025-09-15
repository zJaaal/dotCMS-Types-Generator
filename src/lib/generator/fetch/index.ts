import { DotCMSClient } from '../../client/index.js';
import { ContentTypeStructure, ContentTypeStructureFetch } from '../../shared/types.js';

export const fetchStructure = async ({
    contentType,
    host,
    token
}: ContentTypeStructureFetch): Promise<ContentTypeStructure[]> => {
    const client = new DotCMSClient({
        baseURL: host,
        token: token
    });

    const contentTypeStructure = await client.getContentTypeStructure({
        contentType
    });

    return contentTypeStructure;
};
