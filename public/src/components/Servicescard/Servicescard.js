class MyServicescard extends HTMLElement{

    static get observedAttributes(){
        return["image","name"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
    this[propName] = newValue;
    this.render();}
    }

    render(){
        if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Servicescard/Servicescard.css">
        <section>
            <img src="${this.image}">
            <h3>${this.name}</h3>
        </section>
        `;
    }
    }
}

customElements.define('my-servicescard', MyServicescard);
export default MyServicescard