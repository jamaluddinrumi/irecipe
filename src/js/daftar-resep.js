import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {
    set resepresep(resepresep) {
        this._resepresep = resepresep;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._resepresep.forEach(resep => {
            const iniResepElement = document.createElement("ini-resep");
            iniResepElement.resep = resep;
            this.appendChild(iniResepElement);
        });
    }
}
customElements.define("daftar-resep", DaftarResep);