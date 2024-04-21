import mapGl from 'maplibre-gl';
import mapGlCss from 'maplibre-gl/dist/maplibre-gl.css?inline';
import { createRoot } from 'react-dom/client';
import { webContainer, asReactComponent, greedy } from '@akiyamka/web-container';
import { App } from './App';

// TODO: Use import-attribute 'css' when proposal finished
// https://github.com/tc39/proposal-import-attributes
// Rollup plugin: https://www.npmjs.com/package/rollup-plugin-import-css
// TS support:
// 1) https://github.com/microsoft/TypeScript/issues/46689
// 2) https://github.com/microsoft/TypeScript/issues/46135

/* Create container */
const container = webContainer({
  componentName: 'geo-map',
  scopedCss: [mapGlCss],
  plugins: [greedy()],
});

/* Mount in container any you wish */
export const geoMap = new mapGl.Map({
  container: container.target,
  style: 'https://demotiles.maplibre.org/style.json',
  center: [0, 0],
  zoom: 1,
});

/* Hook for mounted event useful for canvas based libraries */
container.wasMounted.then(() => {
  geoMap.resize();
});

/**
 * You can use it any layout as <geo-map />
 * but for seamless integration with react use wrapper
 * **/

const GeoMapComponent = asReactComponent(container);

const root = createRoot(document.getElementById('app')!);
root.render(
  <App>
    <GeoMapComponent />
  </App>
);
