export type ContentTypeStructureAPIParams = {
    contentType: string;
};

export type ContentTypeStructureFetch = {
    contentType: string;
    host: string;
    token: string;
};

export type ContentTypeStructure = {
    clazz: string;
    variable: string;
    required: boolean;
    relationships: {
        velocityVar: string;
    };
};

export type DotCMSConfig = {
    baseURL: string;
    siteID?: string;
    token: string;
};

export type Arguments = {
    contentTypes: string[];
    host: string;
    token: string;
    target: string;
};
