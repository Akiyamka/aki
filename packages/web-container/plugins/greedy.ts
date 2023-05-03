import { adoptCss } from '../adoptCss';
import { WebContainerOptionsWihDefaults } from '../types';

export function greedy() {
  return {
    version: 1 as const,
    pathOptions: (options: WebContainerOptionsWihDefaults) => ({
      ...options,
      scopedCss: [
        ...options.scopedCss,
        `.${options.classes.target} { width: 100%; height: 100%; position: relative; }`,
      ],
    }),
    hooks: {
      postCreate: (options: WebContainerOptionsWihDefaults) => {
        const unScopedCss = `.${options.classes.component} { overflow: hidden; flex: 1 }`;
        document.adoptedStyleSheets = [
          ...document.adoptedStyleSheets,
          adoptCss(unScopedCss),
        ];
      },
    },
  };
}
