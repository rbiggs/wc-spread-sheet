import {LitElement, html, css} from 'https://unpkg.com/lit-element?module'

class AppHeader extends LitElement {
  static get properties() {
    return {
      message: {type: String}
    };
  }
  render() {
    return html`
      <style>
        header {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
        }
        h1 {
          color: #fff;
          margin: 0;
          font: 2.5rem Futura, sans-serif;
        }
      </style>
    <header>
      <nav>
        <h1>WC ${this.message}</h1>
      </nav>
    </header>
    `
  }
}

customElements.define('app-header', AppHeader)
