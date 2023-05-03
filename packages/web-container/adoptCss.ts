export const adoptCss = (css: string | CSSStyleSheet) => {
  if (typeof css === 'string') {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(css);
    return styleSheet;
  }
  return css;
};
