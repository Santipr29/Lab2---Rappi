class storeType extends HTMLElement {

    static get observedAttributes() {
        return ["storeType","storeIcon"];
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
        <link rel="stylesheet" href="./storeType.css">
        <section>
        <img src="${this.storeIcon}" alt="">
        <p>${this.storeType}</p>
        </section>
        `;
    }
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;