import { DotCMSBasicContentlet } from '@dotcms/types';
import { DotCMSBlog } from './Blog';
import { DotCMSBlogCommentor } from './BlogCommentor';

export interface DotCMSBlogComment extends DotCMSBasicContentlet {
    title?: string;
    body?: string;
    postDate?: number;
    emailResponse?: string;
    ipAddress?: string;
    blog?: DotCMSBlog;
    commentAuthor?: DotCMSBlogCommentor;
    reply?: DotCMSBlogComment;
}
