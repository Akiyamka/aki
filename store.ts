import { runSaga, stdChannel } from "redux-saga";
import { EventEmitter } from "eventemitter3";

export function runSagas(rootSaga, storage = new Map()) {
  const state = storage;
  const emitter = new EventEmitter();
  const channel = stdChannel();
  emitter.on("saga-action", channel.put);

  const myIO = {
    // this will be used to orchestrate take and put Effects
    channel,
    // this will be used to resolve put Effects
    dispatch(output) {
      emitter.emit("saga-action", output);
    },
    // this will be used to resolve select Effects
    getState() {
      return state;
    },
  };

  runSaga(myIO, rootSaga);
  return emitter;
}

export function action<K>(type: string) {
  return (payload: K) => ({
    type,
    payload,
  });
}
