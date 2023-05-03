import Deferred from 'p-defer';
import type { MountPointOptions } from './types';

const adoptCss = (css: string | CSSStyleSheet) => {
  if (typeof css === 'string') {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(css);
    return styleSheet;
  }
  return css;
};

export function webContainer(options: MountPointOptions) {
  const deferred = Deferred<true>();
  const target = document.createElement(options.tagName ?? 'div');
  const wasMounted = deferred.promise;

  class WebContainer extends HTMLElement {
    constructor() {
      super();
      this.createCustomElement();
    }

    createCustomElement() {
      const shadowRoot = this.attachShadow({
        mode: options.shadowRootMode ?? 'closed',
      });

      options.classes?.target &&
        target.setAttribute('class', options.classes.target);

      if (options.scopedCss?.length) {
        shadowRoot.adoptedStyleSheets = options.scopedCss.map(adoptCss);
      }
      shadowRoot.appendChild(target);

      if (options.unScopedCss?.length) {
        document.adoptedStyleSheets = options.unScopedCss.map(adoptCss);
      }
    }

    connectedCallback() {
      if (this.isConnected) {
        if (options.classes?.component) {
          this.setAttribute('class', options.classes.component);
        }
        deferred.resolve(true);
      }
    }

    disconnectedCallback() {}
  }

  /* HRM case - just update already declared component */
  if (customElements.get(options.componentName)) {
    document.querySelectorAll(options.componentName).forEach((component) => {
      customElements.upgrade(component);
    });
  } else {
    /* Define custom component */
    customElements.define(options.componentName, WebContainer);
  }

  return {
    target,
    wasMounted,
    tagName: options.componentName,
  };
}
