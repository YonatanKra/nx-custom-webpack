import style from "./app.element.css";
import template from "./app.element.html";

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'custom-webpack';
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${style}</style>` + template.replace('${title}', title);
  }
}
customElements.define('custom-webpack-root', AppElement);
