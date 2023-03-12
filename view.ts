import { render, html } from 'lighterhtml';


const Select = ({ name, options = [] }) => html`<select name=${name}>
${options.map((o) => html`<option value=${o}>${o}</option>`)}
</select>`;


export function Form({ countries, cities, streets }) {
  render(
    document.getElementById('app'),
    html`<div>
      ${Select({ name: 'country', options: countries })}
      ${Select({ name: 'city', options: cities })}
      ${Select({ name: 'street', options: streets })}
    </div>`
  );
}
