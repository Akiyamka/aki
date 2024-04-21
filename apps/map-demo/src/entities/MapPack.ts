import type { StyleSpecification } from 'maplibre-gl';

export interface MapPack {
  version: 1;
  style: StyleSpecification;
  id: string;
  /** good place for ui name, description, group, */
  meta: Record<string, any>;
  popup: {
    /* Markdown template with variables injections */
    type: 'markdown';
    /* @example `Value of source property: {{source.property}}` */
    template: string;
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
    };
  };
  // TODO: icons for addImage, removeImage
  resources: {

  }
}
