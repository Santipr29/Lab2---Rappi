import storeTypeData from "./storeTypeData.js";
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
        storeTypeData.forEach(user => {
            this.shadowRoot.innerHTML +=     
        `
        <storetype-card storeTypeName="${user.storetypename}" storeIcon="${user.storeicon}"></storetype-card>
        `
    
        });
    }
  }
  
  customElements.define("app-container", AppContainer);