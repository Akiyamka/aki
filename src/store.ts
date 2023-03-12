import { runSaga, Saga, stdChannel } from 'redux-saga';
import { EventEmitter } from 'eventemitter3';

const store = new Map([
  ['countries', new Array<string>()],
  ['cities', new Array<string>()],
  ['streets', new Array<string>()],
]);
console.log('🚀 ~ store:', store);

type UnionOfSingleKeyObjects<T extends object> = {
  [K in keyof T]-?: { [P in K]: T[P] };
}[keyof T];

type ValueOf<T> = T[keyof T];

export const actions = {
  countriesLoaded: action<Array<string>>('countriesLoaded'),
  citiesLoaded: action<Array<string>>('citiesLoaded'),
  streetsLoaded: action<Array<string>>('streetsLoaded'),
};

export const sel = {
  countries: () => store.get('countries')!,
  cities: () => store.get('cities')!,
  streets: () => store.get('streets')!,
};

function reducer(
  action: { type: string; payload: any },
  store: Map<string, any>
) {
  switch (action.type) {
    case actions.countriesLoaded.getType():
      store.set('countries', action.payload);
      return;

    case actions.citiesLoaded.getType():
      store.set('cities', action.payload);
      return;

    case actions.streetsLoaded.getType():
      store.set('streets', action.payload);
      return;
  }
}
const channel = stdChannel();
const emitter = new EventEmitter();
export const dispatch = (action: { type: string; payload: any }) => channel.put(action);

export function runSagas(rootSaga: Saga<any[]>) {

  emitter.on('saga-action', channel.put);

  const myIO = {
    // this will be used to orchestrate take and put Effects
    channel,
    // this will be used to resolve put Effects
    dispatch(output: { type: string; payload: any }) {
      debugger
      reducer(output, store);
     emitter.emit('saga-action', output);
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
  return actionCreator;
}
