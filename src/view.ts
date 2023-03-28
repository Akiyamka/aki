import { render, html } from 'lighterhtml';
import './style.css';

const Select = ({
  name,
  options = [],
  selected,
  onChange,
  loading
}: {
  name: string;
  options: Array<string>;
  onChange: (e: InputEvent) => void;
  loading: boolean
  selected?: string;
}) => html`<div style="display: flex; flex-flow: row nowrap; gap: 1em;"><select
  name=${name}
  disabled=${options.length === 0}
  onchange="${onChange}"
>
  <option value="">Select ${name}</option>
  ${options.map((o) => html`<option selected=${selected === o} value=${o}>${o}</option>`)}
</select>${loading ? html`<span>Loading...<span></div>` : ''}`;

export function Form({
  selection,
  countries,
  cities,
  streets,
  onCountrySelect,
  onCitySelect,
  onStreetSelect,
}: {
  selection: {
    country?: string;
    city?: string;
    street?: string;
  }
  countries: string[];
  onCountrySelect: (country: string) => void;
  cities: string[];
  onCitySelect: (city: string) => void;
  streets: string[];
  onStreetSelect: (street: string) => void;
}) {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App node not founded');
    return;
  }
  render(
    app,
    html`<div class="column">
      ${Select({
        selected: selection.country,
        loading: countries.loading,
        name: 'country',
        options: countries ?? [],
        onChange: (e) => {
          onCountrySelect(e.currentTarget.value)
        },
      })}
      ${Select({
        selected: selection.city,
        loading: cities.loading,
        name: 'city',
        options: cities ?? [],
        onChange: (e) => onCitySelect(e.currentTarget.value),
      })}
      ${Select({
        selected: selection.street,
        loading: streets.loading,
        name: 'street',
        options: streets ?? [],
        onChange: (e) => onStreetSelect(e.currentTarget.value),
      })}
    </div>`
  );
}
