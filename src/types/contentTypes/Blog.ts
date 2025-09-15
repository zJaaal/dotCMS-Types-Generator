import { BlockEditorContent, DotCMSBasicContentlet } from "@dotcms/types";
import { DotCMSBlogAuthor } from "./BlogAuthor";
import { DotCMSBlogComment } from "./BlogComment";

export interface DotCMSBlog extends DotCMSBasicContentlet {
  contentHost: string
  title: string
  urlTitle: string
  teaser?: string
  postingDate?: number
  tags?: string
  image?: string
  author?: DotCMSBlogAuthor
  blogContent?: BlockEditorContent
  pageTitle?: string
  pageTitleCount?: string
  metaDescription?: string
  metaDescriptionCount?: string
  aiMetaDescriptionGenerationDotai?: string
  canonicalUrl?: string
  searchEngineIndex?: string
  sitemap?: string
  sitemapImportance?: string
  ogPreview?: string
  ogType?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  ogDescriptionCount?: string
  blogComment?: DotCMSBlogComment
}