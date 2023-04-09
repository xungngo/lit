import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class BootstrapStyles extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js');
    document.body.appendChild(script);
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('bootstrap-styles', BootstrapStyles);
