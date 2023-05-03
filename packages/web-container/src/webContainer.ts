import Deferred from 'p-defer';
import { nanoid } from 'nanoid';
import type {
  WebContainerOptions,
  WebContainerOptionsWihDefaults,
} from './types';
import { adoptCss } from './adoptCss';

function withDefaults(o: WebContainerOptions): WebContainerOptionsWihDefaults {
  return {
    componentName: o.componentName,
    tagName: o.tagName ?? 'div',
    classes: {
      component: o.classes?.component ?? `_${nanoid(4)}`,
      target: o.classes?.target ?? `_${nanoid(4)}`,
    },
    scopedCss: o.scopedCss ?? [],
    shadowRootMode: o.shadowRootMode ?? 'closed',
    plugins: o.plugins ?? [],
  };
}

export function webContainer(rawOptions: WebContainerOptions) {
  let options = withDefaults(rawOptions);
  options.plugins.forEach((plugin) => {
    if (plugin.pathOptions) {
      options = plugin.pathOptions(options);
    }
  });

  const deferred = Deferred<true>();
  const target = document.createElement(options.tagName);
  const wasMounted = deferred.promise;

  class WebContainer extends HTMLElement {
    constructor() {
      super();
      this.createCustomElement();
    }

    createCustomElement() {
      const shadowRoot = this.attachShadow({
        mode: options.shadowRootMode,
      });

      target.setAttribute('class', options.classes.target);

      if (options.scopedCss.length) {
        shadowRoot.adoptedStyleSheets = options.scopedCss.map(adoptCss);
      }
      shadowRoot.appendChild(target);

      options.plugins.forEach((plugin) => {
        if (plugin.hooks?.postCreate) {
          plugin.hooks.postCreate(options);
        }
      });
    }

    connectedCallback() {
      if (this.isConnected) {
        this.setAttribute('class', options.classes.component);
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
