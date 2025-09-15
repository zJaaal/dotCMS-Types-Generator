import { DotCMSBasicContentlet } from "@dotcms/types";
import { DotCMSBlog } from "./Blog";

export interface DotCMSBlogAuthor extends DotCMSBasicContentlet {
  contentHost?: string
  firstName?: string
  lastName?: string
  userId?: string
  profilePhoto?: string
  blog?: DotCMSBlog
}