class storeType extends HTMLElement {

    static get observedAttributes() {
        return ["storeicon","storetypename"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/storeType/storeType.css">
        <section>
        <img src="${this.storeicon}" alt="">
        <p>${this.storetypename}</p>
        </section>
        `;
    }
}

customElements.define('storetype-card', storeType);
export default storeType;