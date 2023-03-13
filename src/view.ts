import { render, html } from 'lighterhtml';
import './style.css';

const Select = ({
  name,
  options = [],
  onChange,
}: {
  name: string;
  options: Array<string>;
  onChange: (e: InputEvent) => void;
}) => html`<select
  name=${name}
  disabled=${options.length === 0}
  onchange="${onChange}"
>
  <option value="">Select ${name}</option>
  ${options.map((o) => html`<option value=${o}>${o}</option>`)}
</select>`;

export function Form({
  countries,
  cities,
  streets,
  onCountrySelect,
  onCitySelect,
  onStreetSelect,
}: {
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
        name: 'country',
        options: countries ?? [],
        onChange: (e) => {
          onCountrySelect(e.currentTarget.value)
        },
      })}
      ${Select({
        name: 'city',
        options: cities ?? [],
        onChange: (e) => onCitySelect(e.currentTarget.value),
      })}
      ${Select({
        name: 'street',
        options: streets ?? [],
        onChange: (e) => onStreetSelect(e.currentTarget.value),
      })}
    </div>`
  );
}
