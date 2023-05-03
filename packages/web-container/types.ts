type WebContainerPlugin<S = any> = {
  version: 1;
  pathOptions?: (
    options: WebContainerOptionsWihDefaults
  ) => WebContainerOptionsWihDefaults;
  hooks?: {
    postCreate: (options: WebContainerOptionsWihDefaults) => void;
  };
};

export interface WebContainerOptions {
  componentName: string;
  classes?: {
    component?: string;
    target?: string;
  };
  tagName?: string;
  scopedCss?: Array<CSSStyleSheet | string>;
  /* Default: closed */
  shadowRootMode?: ShadowRootMode;
  plugins?: Array<WebContainerPlugin>;
}

export interface WebContainerOptionsWihDefaults {
  componentName: string;
  classes: {
    component: string;
    target: string;
  };
  tagName: string;
  scopedCss: Array<CSSStyleSheet | string>;
  shadowRootMode: ShadowRootMode;
  plugins: Array<WebContainerPlugin>;
}
