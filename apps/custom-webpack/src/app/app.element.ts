import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'custom-webpack';
    this.innerHTML = `
      <header class="flex">
    <h1>Welcome to ${title}!</h1>
</header>
<main>
    <h2>Welcome to our app!</h2>
</main>
    `;
  }
}
customElements.define('custom-webpack-root', AppElement);
