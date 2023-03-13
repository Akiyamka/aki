
const mock = <T>(payload: T, ms = 5000) => new Promise<T>(res => setTimeout(() => res(payload), ms))
export const api = {
  getCountries: () => mock(['A_country', 'B_country']),
  getCitiesForCountry: (country: string) => mock(['_a_city', '_b_city'].map(city => country + city)),
  getStreetsForCity: (city: string) => mock(['_a_street', '_b_street'].map(street => city + street)),
}
