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

        this.shadowRoot.innerHTML = `
        <nav-bar></nav-bar>
        `

        storeTypeData.forEach(user => {
            this.shadowRoot.innerHTML +=`
        <storetype-card storeTypeName="${user.storetypename}" storeIcon="${user.storeicon}"></storetype-card>
        `
        });

        dataServices.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <my-servicescard image="${user.image}" name="${user.name}"></my-servicescard>
            `
        });

        this.shadowRoot.innerHTML += `
        <h1>Únete a Rappi</h1>
        `

        dataAbout.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <my-aboutcard image="${user.image}" tittle="${user.tittle}" description="${user.description}"></my-aboutcard>
            `
        });
    }
}

customElements.define("app-container",AppContainer)