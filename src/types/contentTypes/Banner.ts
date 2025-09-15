import { DotCMSBasicContentlet } from "@dotcms/types";

export interface DotCMSBanner extends DotCMSBasicContentlet {
  contentHost: string
  title: string
  styles?: string
  layout?: string
  caption?: string
  buttonText?: string
  link?: string
  textColor?: string
  tags?: string
  image: string
}