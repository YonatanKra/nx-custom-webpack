import './app.element.css';
import template from './app.element.html';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'custom-webpack';
    this.innerHTML = template.replace('${title}', title);
  }
}
customElements.define('custom-webpack-root', AppElement);
