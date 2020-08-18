import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {

    connectedCallback() {
        this.className = 'row';
        this.innerHTML = `
        <div class="col p-3 m-3 text-center banner">
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
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.854 11.354a.5.5 0 0 0 0-.708L5.207 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9A.5.5 0 0 0 15 8z"/>
                    <path fill-rule="evenodd" d="M2.5 14.5A1.5 1.5 0 0 1 1 13V3a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 12 3v1.5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5h-8A.5.5 0 0 0 2 3v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V13a1.5 1.5 0 0 1-1.5 1.5h-8z"/>
                </svg>
                Back
             </a>
            `;
            this.appendChild(back);
        } else {
            this.className = 'row';
            this.innerHTML = `
            <div class="col p-3 p-md-5 text-center oops">
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