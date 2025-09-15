import { DotCMSBasicContentlet } from "@dotcms/types";
import { DotCMSBlogComment } from "./BlogComment";

export interface DotCMSBlogCommentor extends DotCMSBasicContentlet {
  contentHost?: string
  firstName?: string
  lastName?: string
  userId?: string
  profilePhoto?: string
  blogComment?: DotCMSBlogComment
}