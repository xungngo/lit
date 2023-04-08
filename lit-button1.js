import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'; // doesn't allow to do it with css
//import bootstrap from '/stylesheets/library/bootstrap.min.css'; // can't find

export class LitButton1 extends LitElement {
  static properties = {
    name: {}, link_1: {}, link_2: {}
  };
  // Define scoped styles right with your component, in plain CSS
  //static styles = bootstrap;
  static styles = css`
    :host { color: blue; }
    //:host .btn-style-1 { color: green; }
    //:host .btn-style-2 { color: red; }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
    this.link_1 = 'Link Style 1';
    this.link_2 = 'Link Style 2';
  }

  // Render the UI as a function of component state
  render() {
    return html`
    <p>Hello, ${this.name}!</p>
    <a href="#" class="btn btn-primary btn-style-1" title="${this.link_1}">${this.link_1}</a>
    <a href="#" class="btn btn-warning btn-style-2" title="${this.link_2}">${this.link_2}</a>
    `;
  }
  
  createRenderRoot() {
    return this;
  }
}
customElements.define('lit-button1', LitButton1);
