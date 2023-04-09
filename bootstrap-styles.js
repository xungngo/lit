import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class BootstrapStyles extends LitElement {
  //static get styles() {
    //return `
      //:host {
        //display: none;
      //}
    //`;
  //}

  constructor() {
    super();

    // Check if the BootstrapStyles component has already been added to the document
    const existingComponent = document.querySelector(`bootstrap-styles`);
    if (existingComponent) {
      existingComponent.remove();
    }

    // Create a new link element and append it to the head of the document
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
  }

  connectedCallback() {
    super.connectedCallback();

    // Make the component visible, now that it has added the link to the document
    this.style.display = 'block';
  }

  render() {
    return html``;
  }
}

customElements.define('bootstrap-styles', BootstrapStyles);
