# Design

GeoMapController

- allow CRUD new mapPacks
- allow subscribe to mapPacks changes
- allow use style spec compatible map libraries
- allow reactively subscribe to stylePack changes
- allow describe styles sort rules
- allow describe popups
- allow open links by click
- can be extended via plugins

# LayerPack

```ts
 interface MapPack {
  version 1;
  style: StyleSpec;
  id: string;
  /** good place for ui name, description, group, */
  meta: Record<string, any>;
  popup: {
    /* Markdown template with variables injections */
    type: 'markdown',
    /* @example `Value of source property: {{source.property}}` */
    template: string
  };
  legend: {
    // TODO: describe base set of legends
  };
  /* TODO - handle case with multiple interactions on one point */
  interactions: {
    openLink: {
      /* source.property */
      from: string;
      openInNewTab?: boolean;
    }
  }
}

```
