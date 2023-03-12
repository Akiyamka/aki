import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { api } from './api';
import { runSagas } from './store';
import './style.css';
import { Form } from './view';

const act = {
  showCountriesDropDown: <T>(payload: T) => ({
    type: 'showCountriesDropDown',
    payload,
  }),
  showCitiesDropDown: 'showCitiesDropDown',
  showStreetsDropDown: 'showStreetsDropDown',
  countriesLoaded: 'countriesLoaded',
  citiesLoaded: 'citiesLoaded',
  streetsLoaded: 'streetsLoaded',
};

function* rootSaga() {
  yield takeLatest([act.showCountriesDropDown]);
  Form({ countries: [1, 2, 3], cities: [], streets: [] });
}
runSagas(rootSaga);


/**
 * Представим что у нас есть такая форма
 * Выберите страну: <input onChange={countrySelected} />
 * Выберите город:  <input onChange={citySelected} />
 * Выберите улицу:  <input onChange={streetSelected} />
 *
 * Задача - каждый следующий инпут меняет свое содержимое в зависимости от того
 * что выбрано в инпутах выше. Если пользователь меняет страну
 * в середине загрузки списка - все нижележащие запросы нужно отменять
 */

/**
 * Саги загрузки ресурсов.
 * Мы могли бы просто возращать результат, но это не saga-way
 * По хорошему нужно оставлять вомзожность другим частям приложения
 * узнавать о том что реурс был загужен не запуская сагу его фетча
 */
// function* loadCountries() {
//   const { data } = yield call(api.getCountries);
//   yield put(act.countriesLoaded(data));
// }

// function* loadCities({ payload: country }) {
//   const { data } = yield call(api.getCitiesForCountry, country);
//   yield put(act.citiesLoaded(data));
// }

// function* loadStreets({ payload: city }) {
//   const { data } = yield call(api.getStreetsForCity, city);
//   yield put(act.streetsLoaded(data));
// }

// /* Сага формы */
// function* rootSaga() {
//   const countries = yield fork(loadCountries);
//   yield put(act.showCountriesDropDown, countries);
//   // Дальше начинается лестница вложености, и она будет тем более вложенной чем
//   // Больше у нас зависимых друг от друга takeLatest
//   yield takeLatest(countrySelected, function* ({ payload }) {
//     yield fork(loadCities, payload);
//     const cities = yield take(citiesLoaded);
//     yield put(act.showCitiesDropDown, cities);
//     yield takeLatest(citySelected, function* ({ payload }) {
//       yield fork(loadStreets, payload);
//       const streets = yield take(streetsLoaded);
//       yield put(act.showStreetsDropDown, streets);
//       yield takeLatest(streetSelected, ...etc);
//       // Тут еще может быть дома, квартира и тп
//     });
//   });
// }
