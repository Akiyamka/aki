import { call, put, fork, takeLatest, take, select } from 'typed-redux-saga';
import { api } from './api';
import { action, dispatch, runSagas, sel } from './store';
import { Form } from './view';

const act = {
  // to view
  showCountriesDropDown: action<Array<string>>('showCountriesDropDown'),
  showCitiesDropDown: action<Array<string>>('showCitiesDropDown'),
  showStreetsDropDown: action<Array<string>>('showStreetsDropDown'),
  // from view
  countrySelected: action<string>('countrySelected'),
  citySelected: action<string>('citySelected'),
  streetSelected: action<string>('streetSelected'),
  // resources
  countriesLoaded: action<Array<string>>('countriesLoaded'),
  citiesLoaded: action<Array<string>>('citiesLoaded'),
  streetsLoaded: action<Array<string>>('streetsLoaded'),
};

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
  console.log({ countries, cities, streets });
  Form({
    countries,
    cities,
    streets,
    onCountrySelect: (country) => {
      console.log('🚀 ~ function*updateView ~ country:', country)
      dispatch(act.countrySelected(country))
    },
    onCitySelect: (city) => {
      // dispatch(act.citySelected(city)),

    },
    onStreetSelect: (street) => {
      // dispatch(act.citySelected(street))
    }
      
  });
  
}

function* rootSaga() {
  yield* takeLatest(
    [
      act.showCountriesDropDown,
      act.showCitiesDropDown,
      act.showStreetsDropDown,
    ],
    updateView
  );
  yield* fork(loadCountries);
  // ! Problem - redux-saga effects always return any type
  // typed-redux-saga allow to fix that but have some disadvantages:
  // - you must be very careful and write `yield*` instead of `yield` in sagas
  // - for avoid performance downgrade in better to use babel macro, so you also need babel with plugin
  // - be careful when you auto import saga effects, you must import them from `typed-redux-saga/macro` instead of `redux-saga/effects` or `typed-redux-saga`
  const { payload: countries } = yield* take(act.countriesLoaded);
  yield* put(act.showCountriesDropDown(countries));

  yield* takeLatest(act.countrySelected, function* ({ payload }) {
    yield* fork(loadCities, payload);
    const { payload: cities } = yield* take(act.citiesLoaded);
    // yield* put(act.showCitiesDropDown(cities));
    // yield takeLatest(act.citySelected, function* ({ payload }) {
    //   yield* fork(loadStreets, payload);
    //   const { payload: streets } = yield* take(act.streetsLoaded);
    //   yield* put(act.showStreetsDropDown(streets));
    //   yield* takeLatest(act.streetSelected, function* ({ payload: street }) {
    //     console.log('street', street);
    //   });
    // });
  });
}
runSagas(rootSaga);

/**
 * Resource loading sagas.
 */
function* loadCountries() {
  const data = yield* call(api.getCountries);
  yield put(act.countriesLoaded(data));
}

function* loadCities(country: string) {
  debugger
  const data = yield* call(api.getCitiesForCountry, country);
  yield put(act.citiesLoaded(data));
}

function* loadStreets(city: string) {
  const data = yield* call(api.getStreetsForCity, city);
  yield put(act.streetsLoaded(data));
}
