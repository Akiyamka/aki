class PriorityHashMap<Value> {
  private hashMap = new Map<string, Value>();
  private order = Array<string>();
  private listeners = new Set<(hashMap: PriorityHashMap<Value>) => void>();
  private invokeListeners = () => this.listeners.forEach((l) => l(this));

  //#region Mutations
  set(key: string, val: Value, at?: number) {
    this.hashMap.set(key, val);
    if (at === undefined) {
      this.order.push(key);
    } else {
      this.order.splice(at, 0, key);
    }
    this.invokeListeners();
    return this;
  }

  delete(key: string) {
    this.order = this.order.filter((k) => k !== key);
    this.invokeListeners();
    return this.hashMap.delete(key);
  }

  move(key: string, at: number) {
    const idx = this.order.indexOf(key);
    this.order.splice(idx, 1);
    this.order.splice(at, 0, key);
    this.invokeListeners();
    return this;
  }

  clear() {
    this.hashMap.clear();
    this.order.length = 0;
    this.invokeListeners();
  }
  //#endregion

  get(key: string) {
    return this.hashMap.get(key);
  }

  getPosition(key: string) {
    return this.order.indexOf(key);
  }

  has(key: string) {
    return this.hashMap.has(key);
  }

  forEach(cb: (value: Value, key?: string, index?: number) => void) {
    this.order.forEach((key, i) => {
      cb(this.hashMap.get(key)!, key, i);
    });
  }

  map(cb: (value: Value, key?: string, index?: number) => void) {
    return this.order.map((key, i) => cb(this.hashMap.get(key)!, key, i));
  }

  get keys() {
    return [...this.order];
  }

  get unorderedValues() {
    return this.hashMap.values();
  }

  get size() {
    return this.order.length;
  }

  subscribe(listener: (hashMap: PriorityHashMap<Value>) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
