import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {
    set resepresep(resepresep) {
        this._resepresep = Object.entries(resepresep)[0][1];
        // console.log(this._resepresep);
        this.render();
    }

    render() {
        this.innerHTML = "";
        // console.log(this._resepresep);

        this._resepresep.forEach(resep => {
            const iniResepElement = document.createElement("ini-resep");
            iniResepElement.resep = resep;
            this.appendChild(iniResepElement);
        });
    }
    
}
customElements.define("daftar-resep", DaftarResep);