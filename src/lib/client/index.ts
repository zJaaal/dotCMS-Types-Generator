import {
    ContentTypeStructure,
    ContentTypeStructureAPIParams,
    DotCMSConfig
} from '../shared/types.js';

const PAGE_API_PATH = '/api/v1/contenttype/id/';

export class DotCMSClient {
    #token: string;
    #siteID?: string;
    #baseURL: string;
    constructor({ baseURL, siteID, token }: DotCMSConfig) {
        this.#baseURL = baseURL;
        this.#siteID = siteID;
        this.#token = token;
    }

    async getContentTypeStructure({
        contentType
    }: ContentTypeStructureAPIParams): Promise<ContentTypeStructure[]> {
        const url = new URL(`${PAGE_API_PATH}${contentType}`, this.#baseURL);

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.#token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch Content Type Structure: ${response.statusText}`);
        }
        const data = await response.json();
        return data.entity.fields;
    }
}
