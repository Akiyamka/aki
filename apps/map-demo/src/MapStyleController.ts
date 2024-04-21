import { MapPack } from './entities/MapPack';

class PacksRepo {
  packs = new PriorityHashMap<MapPack>();

  addPack(pack: MapPack, before?: string) {
    if (before) {
      const beforePosition = this.packs.getPosition(before);
      this.packs.set(pack.id, pack, beforePosition);
    } else {
      this.packs.set(pack.id, pack);
    }
  }

  removePack = (packId: string) => {
    this.packs.delete(packId);
  };

  movePack = (packId: string, place: number) => {
    this.packs.move(packId, place);
  };

  subscribe = (cb: (state: PriorityHashMap<MapPack>) => void) => {
    this.packs.subscribe(cb);
  };
}

export class MapStyleController {
  private origGeoMap: GeoMap;
  private packs = new PacksRepo();
  public geoMap: Omit<GeoMap, 'addLayer' | 'removeLayer' | 'moveLayer'>;

  constructor(geoMap: GeoMap) {
    this.origGeoMap = geoMap;
    this.geoMap = geoMap;
    this.packs.subscribe(() => this.sortLayers());
  }

  addPack() {
    this.packs.addPack()
  }
   
  removePack = this.packs.removePack;
  movePack = this.packs.movePack;
  subscribe = this.packs.subscribe;

  sortLayers() {}
}
