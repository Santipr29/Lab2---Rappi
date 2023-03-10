import data from "./data.js";
import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <custom-message message="Hellooooo guys"></custom-message>
      <my-counter></my-counter>
      `;
    }
  }
  
  customElements.define("app-container", AppContainer);