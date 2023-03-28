import { runSaga, Saga, stdChannel } from 'redux-saga';

const store = new Map([
  ['countries', new Array<string>()],
  ['cities', new Array<string>()],
  ['streets', new Array<string>()],
  [
    'selection',
    {
      country: null,
      city: null,
      street: null,
    },
  ],
]);

const addLoading = <T extends Object>(obj: T): T & { loading: boolean } => {
  // @ts-ignore
  obj.loading = true;
  // @ts-ignore
  return obj;
};

export const actions = {
  setCountries: action<Array<string>>('setCountries'),
  setCountriesLoading: action('setCountriesLoading'),
  countrySelected: action<string>('countrySelected'),
  setCities: action<Array<string>>('setCities'),
  setCitiesLoading: action('setCitiesLoading'),
  citySelected: action<string>('citySelected'),
  setStreets: action<Array<string>>('setStreets'),
  setStreetsLoading: action<Array<string>>('setStreetsLoading'),
  streetSelected: action<string>('streetSelected'),
  reset: action('reset'),
};

export const sel = {
  countries: () => store.get('countries')!,
  cities: () => store.get('cities')!,
  streets: () => store.get('streets')!,
  selection: () => store.get('selection')!,
};

function reducer(
  action: { type: string; payload: any },
  store: Map<string, any>
) {
  switch (action.type) {
    case actions.setCountries.getType():
      store.set('countries', action.payload);
      return;

    case actions.setCountriesLoading.getType():
      store.set('countries', addLoading(new Array()));
      return;

    case actions.countrySelected.getType():
      store.set('selection', {
        ...(store.get('selection') ?? {}),
        country: action.payload,
      });
      return;

    case actions.setCities.getType():
      store.set('cities', action.payload);
      return;

    case actions.setCitiesLoading.getType():
      store.set('cities', addLoading(new Array()));
      return;

    case actions.citySelected.getType():
      store.set('selection', {
        ...(store.get('selection') ?? {}),
        city: action.payload,
      });
      return;

    case actions.setStreets.getType():
      store.set('streets', action.payload);
      return;

    case actions.setStreetsLoading.getType():
      store.set('streets', addLoading(new Array()));

    case actions.streetSelected.getType():
      store.set('selection', {
        ...(store.get('selection') ?? {}),
        street: action.payload,
      });
      return;

    case actions.reset.getType():
      store.set('cities', []);
      store.set('streets', []);
      return;
  }
}
const channel = stdChannel();
export const dispatch = (action: { type: string; payload: any }) =>
  channel.put(action);

export function runSagas(rootSaga: Saga<any[]>) {
  const myIO = {
    // this will be used to orchestrate take and put Effects
    channel,
    // this will be used to resolve put Effects
    dispatch(action: { type: string; payload: any }) {
      reducer(action, store);
      channel.put(action);
    },
    // this will be used to resolve select Effects
    getState() {
      return store;
    },
  };

  runSaga(myIO, rootSaga);
}

export function action<K, T = string>(type: T) {
  const actionCreator = (payload: K) => ({
    type,
    payload,
  });
  actionCreator.getType = () => type;
  /**
   * Note: if the pattern function has toString defined on it,
   * action.type will be tested against pattern.toString() instead.
   * This is useful if you're using an action creator library
   * like redux-act or redux-actions.
   * https://redux-saga.js.org/docs/api#takepattern
   */
  actionCreator.toString = () => type;
  return actionCreator;
}
