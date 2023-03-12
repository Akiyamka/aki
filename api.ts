
const mock = (payload: Array<string>, ms = 1000) => new Promise(res => setTimeout(() => res(payload), 1000))
export const api = {
  getCountries: () => mock(['A_country', 'B_country']),
  getCities: (country: string) => mock(['_a_city', '_b_city'].map(city => country + city)),
  getStreets: (city: string) => mock(['_a_street', '_b_street'].map(street => city + street)),
}
