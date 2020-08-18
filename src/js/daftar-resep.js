import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {

    connectedCallback() {
        this.className = '';
        this.innerHTML = `
        <div class="p-3 p-md-5 m-md-3 text-center banner">
            <div class="kata-kata col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Looking for Recipe</h1>
                <kolom-pencarian></kolom-pencarian>
                <div class="recommendations text-left py-2">
                    <span class="recommendation">Chicken</span>
                    <span class="recommendation">Salmon</span>
                    <span class="recommendation">Soup</span>
                    <span class="recommendation">Beef</span>
                    <span class="recommendation">Burger</span>
                    <span class="recommendation">Steak</span>
                    <span class="recommendation">Pizza</span>
                    <span class="recommendation">Pudding</span>
                    <span class="recommendation">Donut</span>
                    <span class="recommendation">Avocado</span>
                </div>
            </div>
        </div>
        `;

    }

    set resepresep(resepresep) {
        this._resepresep = resepresep;
        this.render();
    }

    render() {
        if (this._resepresep !== null) {
            this.className = 'row';
            this.innerHTML = "";
    
            this._resepresep.forEach(resep => {
                const iniResepElement = document.createElement("ini-resep");
                iniResepElement.resep = resep;
                this.appendChild(iniResepElement);
            });

            const back = document.createElement('div');
            back.className = 'col';
            back.innerHTML = `
             <a class="text-black-50 font-weight-bold" href="${window.location.href}">
                <i class="fa fa-angle-double-left"></i> Back
             </a>
            `;
            this.appendChild(back);
        } else {
            this.className = 'row clearfix';
            this.innerHTML = `
            <div class="p-3 p-md-5 m-md-3 text-center oops">
                <div class="kata-kata col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Oops, <br />not found!</h1>
                    <div class="recommendations text-center py-2">
                        <p>
                            silahkan cari resep yang lain <br /> yang banyak dicari seperti: <br />
                            Chicken, Salmon, Soup, Beef, Burger, Steak, Pizza, Pudding, Chocolate atau lainnya 
                        </p>
                    </div>
                </div>
            </div>
            `;
        }

    }

}
customElements.define("daftar-resep", DaftarResep);