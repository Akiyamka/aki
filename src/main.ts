import { call, put, fork, takeLatest, select } from 'typed-redux-saga';
import { api } from './api';
import { dispatch, runSagas, sel, actions } from './store';
import { Form } from './view';

function* updateView() {
  // !Boilerplate - if you listen more that one event you must select values from store manually
  // In rare cases can be broken
  // From redux-saga documentation:
  // > It's important to note that when an action is dispatched to the store,
  // > the middleware first forwards the action to the reducers and then notifies the Sagas.
  // > This means that when you query the Store's State, you get the State after the action has been applied.
  // > However, this behavior is only guaranteed if all subsequent middlewares call next(action) synchronously.
  // > If any subsequent middleware calls next(action) asynchronously (which is unusual but possible),
  // > then the sagas will get the state from before the action is applied.
  // > Therefore it is recommended to review the source of each subsequent middleware to ensure it calls next(action) synchronously,
  // > or else ensure that redux-saga is the last middleware in the call chain.
  // https://redux-saga.js.org/docs/api/#selectselector-args
  const countries = yield* select(sel.countries);
  const cities = yield* select(sel.cities);
  const streets = yield* select(sel.streets);
  const selection = yield* select(sel.selection);
  Form({
    selection,
    countries,
    cities,
    streets,
    onCountrySelect: (country) => {
      dispatch(actions.countrySelected(country));
    },
    onCitySelect: (city) => {
      dispatch(actions.citySelected(city));
    },
    onStreetSelect: (street) => {
      dispatch(actions.streetSelected(street));
    },
  });
}

function* rootSaga() {
  /* Feature - you can subscribe to multiple actions */
  yield* takeLatest(
    Object.keys(actions),
    updateView
  );
  yield* fork(loadCountries);
  // ! Problem - redux-saga effects always return any type
  // typed-redux-saga allow to fix that but have some disadvantages:
  // - you must be very careful and write `yield*` instead of `yield` in sagas
  // - for avoid performance downgrade in better to use babel macro, so you also need babel with plugin
  // - be careful when you auto import saga effects, you must import them from `typed-redux-saga/macro` instead of `redux-saga/effects` or `typed-redux-saga`

  yield* takeLatest(actions.countrySelected, function* ({ payload }) {
    // No auto batching mechanics - so you need create special actionsions that change multiple files at once
    yield* put(actions.reset(null));
    if (payload) {
      yield* fork(loadCities, payload);
    }
    yield takeLatest(actions.citySelected, function* ({ payload }) {
      yield* fork(loadStreets, payload);
      yield* takeLatest(actions.streetSelected, function* ({ payload: street }) {
        console.log('street', street);
      });
    });
  });
}
runSagas(rootSaga);

/**
 * Resource loading sagas.
 * TODO: Add canceling fetch
 * https://github.com/redux-saga/redux-saga/issues/651#issuecomment-262375964
 */
function* loadCountries() {
  yield* put(actions.setCountriesLoading());
  const data = yield* call(api.getCountries);
  yield* put(actions.setCountries(data));
}

function* loadCities(country: string) {
  yield* put(actions.setCitiesLoading());
  const data = yield* call(api.getCitiesForCountry, country);
  yield* put(actions.setCities(data));
}

function* loadStreets(city: string) {
  yield* put(actions.setStreetsLoading());
  const data = yield* call(api.getStreetsForCity, city);
  yield* put(actions.setStreets(data));
}
