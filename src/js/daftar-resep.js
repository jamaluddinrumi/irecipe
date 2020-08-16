import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {
    set resepresep(resepresep) {
        this._resepresep = resepresep;
        // console.log(this._resepresep);
        this.render();
    }

    render() {
        this.innerHTML = "";
        // console.log(this._resepresep);

        // var i = 1;

        this._resepresep.forEach(resep => {
            const iniResepElement = document.createElement("ini-resep");
            iniResepElement.resep = resep;
            this.appendChild(iniResepElement);

            // if (i%2 == 0) {
            //     const pembagiElement = document.createElement("div");
            //     pembagiElement.className += 'w-100 ';
            //     this.appendChild(pembagiElement);
            // }

            // i++;
        });
    }
    
}
customElements.define("daftar-resep", DaftarResep);