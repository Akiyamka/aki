export interface MountPointOptions {
  componentName: string;
  classes?: {
    component?: string;
    target?: string
  }
  tagName?: string;
  scopedCss?: Array<CSSStyleSheet | string>;
  unScopedCss?: Array<CSSStyleSheet | string>;
  /* Default: closed */
  shadowRootMode?: ShadowRootMode;
}