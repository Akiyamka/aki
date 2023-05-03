import type { PropsWithChildren } from 'react';
/* MyButton.jsx */
import { css } from 'vite-css-in-js';

//Variable will contain the class name of the specified styles
const sectionStyles = css`
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
`;

export function App({ children }: PropsWithChildren) {
  return (
    <section className={sectionStyles}>
      <h1>Web container demo</h1>
      {children}
    </section>
  );
}
