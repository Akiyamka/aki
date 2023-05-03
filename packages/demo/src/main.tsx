import mapGl from 'maplibre-gl';
import mapGlCss from 'maplibre-gl/dist/maplibre-gl.css?inline';
import { createRoot } from 'react-dom/client';
import { webContainer, asReactComponent } from '@aki/web-container';
import { App } from './App';

// TODO: Use import-attribute 'css' when proposal finished
// https://github.com/tc39/proposal-import-attributes
// Rollup plugin: https://www.npmjs.com/package/rollup-plugin-import-css
// TS support:
// 1) https://github.com/microsoft/TypeScript/issues/46689
// 2) https://github.com/microsoft/TypeScript/issues/46135
const mapGlCssSheet = new CSSStyleSheet();
mapGlCssSheet.replaceSync(mapGlCss);

const containerCssSheet = `
.geo-map__target {
   width: 100%;
   height: 100%;
   position: relative;
}`;

const container = webContainer({
  componentName: 'geo-map',
  scopedCss: [mapGlCssSheet, containerCssSheet],
  unScopedCss: ['.geo-map { overflow: hidden; flex: 1 }'],
  classes: {
    component: 'geo-map',
    target: 'geo-map__target',
  },
});

const geoMap = new mapGl.Map({
  container: container.target,
  style: 'https://demotiles.maplibre.org/style.json',
  center: [0, 0],
  zoom: 1,
});

container.wasMounted.then(() => {
  geoMap.resize();
});

const GeoMapComponent = asReactComponent(container);

const root = createRoot(document.getElementById('app')!);
root.render(
  <App>
    <GeoMapComponent />
  </App>
);
