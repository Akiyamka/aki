import { createElement } from 'react';

export function asReactComponent({ tagName }: { tagName: string }) {
  return () => createElement(tagName, null);
}

