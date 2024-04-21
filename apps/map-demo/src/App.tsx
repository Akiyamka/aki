import type { PropsWithChildren } from 'react';
import { css } from 'vite-css-in-js';
import { PacksListView } from './LayersView';

const sectionStyles = css`
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
`;

const titleStyles = css`
  margin: 1em;
`;

export function App({ children }: PropsWithChildren) {
  return (
    <section className={sectionStyles}>
      <h1 className={titleStyles}>Web container demo</h1>
      {children}
      <PacksListView />
    </section>
  );
}
