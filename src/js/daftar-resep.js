import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light banner">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Cari Resep</h1>
                <kolom-pencarian></kolom-pencarian>
                <div class="recommendations text-left mt-1"><span>Chicken</span><span>Salmon</span><span>Beef</span><span>Avocado</span></div>
            </div>
        </div>
        `;
    }

    set resepresep(resepresep) {
        this._resepresep = resepresep;
        // console.log(this._resepresep);
        this.render();
    }

    render() {
        this.className = 'row';
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