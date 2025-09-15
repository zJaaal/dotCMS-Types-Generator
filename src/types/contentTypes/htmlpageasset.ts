import { DotCMSBasicContentlet } from "@dotcms/types";

export interface DotCMShtmlpageasset extends DotCMSBasicContentlet {
  title: string
  url: string
  template: string
  friendlyName?: string
  subtitle?: string
  hostFolder: string
  showOnMenu?: string
  sortOrder: string
  seodescription?: string
  seokeywords?: string
  pagemetadata?: string
  pageTitle?: string
  pageTitleCount?: string
  metaDescription?: string
  metaDescriptionCount?: string
  metaKeywords?: string
  canonicalUrl?: string
  searchEngineIndex?: string
  sitemap?: string
  sitemapImportance?: string
  ogPreview?: string
  ogType?: string
  ogTitle?: string
  ogDescription?: string
  ogDescriptionCount?: string
  ogImage?: string
  redirecturl?: string
  cachettl: string
  httpsreq?: string
  customCss?: string
}