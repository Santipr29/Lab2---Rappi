class MyAboutcard extends HTMLElement{

    static get observedAttributes(){
        return["image","tittle","description"]
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
        <link rel="stylesheet" href="./src/components/Aboutcard/Aboutcard.css">
        <section class="main">
            <img src="${this.image}">
            <section class="about">
            <h2>${this.tittle}</h2>
            <p>${this.description}</p>
            <button>Conocer más</button>
            </section>
        </section>
        `;
    }
    }
}

customElements.define('my-aboutcard', MyAboutcard);
export default MyAboutcard