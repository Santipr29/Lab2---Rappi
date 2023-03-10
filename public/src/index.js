import dataServices from "./dataServices.js";
import dataAbout from "./dataAbout.js";
import storeTypeData from "./storeTypeData.js";
import * as components from "./components/index.js"

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./src/index.css">
        `

        this.shadowRoot.innerHTML += `
        <nav-bar></nav-bar>
        `

        this.shadowRoot.innerHTML += `
        <h2>¿Necesitas algo más?</h2>
        `

        const storeCards = this.ownerDocument.createElement("section")
        storeCards.className= 'store'
        storeTypeData.forEach(user => {
        `
        <storetype-card storeTypeName="${user.storetypename}" storeIcon="${user.storeicon}"></storetype-card>
        `
        const storeCard = this.ownerDocument.createElement("storetype-card")
        storeCard.setAttribute("storeTypeName", user.storetypename)
        storeCard.setAttribute("storeIcon", user.storeicon)
        storeCards.appendChild(storeCard)
        });
        this.shadowRoot.appendChild(storeCards)
        
        
        const servicesCards = this.ownerDocument.createElement("section")
        servicesCards.className= 'services'
        dataServices.forEach((user)=>{
            `
            <my-servicescard image="${user.image}" name="${user.name}"></my-servicescard>
            `
            const servicesCard = this.ownerDocument.createElement("my-servicescard")
        servicesCard.setAttribute("image", user.image)
        servicesCard.setAttribute("name", user.name)
        servicesCards.appendChild(servicesCard)
        });
        this.shadowRoot.appendChild(servicesCards)

        this.shadowRoot.innerHTML += `
        <h1>Únete a Rappi</h1>
        `
        const aboutCards = this.ownerDocument.createElement("section")
        aboutCards.className= 'about'
        dataAbout.forEach((user)=>{
            `
            <my-aboutcard image="${user.image}" tittle="${user.tittle}" description="${user.description}"></my-aboutcard>
            `
            const aboutCard = this.ownerDocument.createElement("my-aboutcard")
        aboutCard.setAttribute("image", user.image)
        aboutCard.setAttribute("tittle", user.tittle)
        aboutCard.setAttribute("description", user.description)
        aboutCards.appendChild(aboutCard)
        });
        this.shadowRoot.appendChild(aboutCards)
    }
}

customElements.define("app-container",AppContainer)