import { DotCMSBasicContentlet } from "@dotcms/types";

export interface DotCMSVTLInclude extends DotCMSBasicContentlet {
  contentHost?: string
  widgetTitle: string
  componentType?: string
  vtlFile: string
}