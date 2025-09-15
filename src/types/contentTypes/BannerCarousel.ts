import { DotCMSBasicContentlet } from "@dotcms/types";
import { DotCMSBanner } from "./Banner";

export interface DotCMSBannerCarousel extends DotCMSBasicContentlet {
  widgetTitle: string
  contentHost?: string
  banners?: DotCMSBanner
}