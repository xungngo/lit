import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class DatePicker extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'css/datepicker.css');
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.setAttribute('src', 'js/datepicker.min.js');
    document.body.appendChild(script);
  }

  render() {
    return html``;
  }
}

customElements.define('date-picker', DatePicker);
