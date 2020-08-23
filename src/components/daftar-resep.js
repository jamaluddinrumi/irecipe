import './ini-resepthumb.js';
import './ini-resepdetail.js';
import Masonry from 'masonry-layout';
var ImagesLoaded = require("imagesloaded");

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {

    connectedCallback() {
        this.className = 'row';
        this.innerHTML = `
        <div class='col p-3 m-3 text-center banner shadow-sm sleek-border-radius'>
            <div class='kata-kata col-md-5 p-lg-5 mx-auto my-5 sleek-border-radius'>
                <h1 class='display-4 font-weight-normal'>Looking for Recipe</h1>
                <kolom-pencarian></kolom-pencarian>
                <div class='recommendations text-left py-2'>
                    <span class='recommendation shadow-sm'>Chicken</span>
                    <span class='recommendation shadow-sm'>Salmon</span>
                    <span class='recommendation shadow-sm'>Soup</span>
                    <span class='recommendation shadow-sm'>Beef</span>
                    <span class='recommendation shadow-sm'>Burger</span>
                    <span class='recommendation shadow-sm'>Steak</span>
                    <span class='recommendation shadow-sm'>Pizza</span>
                    <span class='recommendation shadow-sm'>Pudding</span>
                    <span class='recommendation shadow-sm'>Donut</span>
                    <span class='recommendation shadow-sm'>Avocado</span>
                </div>
            </div>
        </div>
        `;

    }

    set tampilanDetailResep(detail) {
        this._tampilanDetailResep = detail;
    }

    get tampilanDetailResep() {
        return this._tampilanDetailResep;
    }

    set daftarResep(resepresep) {
        this._resepresep = resepresep;
        this.render();
    }

    render() {
        const mainElement = document.querySelector("main");

        if (this._resepresep !== null) {

            this.innerHTML = '';
            this.className = "row";
    
            this._resepresep.forEach(resep => {
                let iniResepElement = document.createElement('ini-resepthumb');
                if (this._tampilanDetailResep) {
                    iniResepElement = document.createElement('ini-resepdetail');
                } else {
                    iniResepElement = document.createElement('ini-resepthumb');
                }
                iniResepElement.resep = resep;
                this.appendChild(iniResepElement);
            });

            const daftarResepElement = document.querySelector("daftar-resep");
            
            ImagesLoaded("daftar-resep", function () {
                new Masonry(daftarResepElement); 
                
                window.scrollTo(0,0);
            });

            const back = document.createElement('div');
            back.className = "my-2";
            back.innerHTML = `
             <a class='text-black-50 font-weight-bold' href='${window.location.href}'>
                <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-box-arrow-in-left' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' d='M7.854 11.354a.5.5 0 0 0 0-.708L5.207 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'/>
                    <path fill-rule='evenodd' d='M15 8a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9A.5.5 0 0 0 15 8z'/>
                    <path fill-rule='evenodd' d='M2.5 14.5A1.5 1.5 0 0 1 1 13V3a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 12 3v1.5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5h-8A.5.5 0 0 0 2 3v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V13a1.5 1.5 0 0 1-1.5 1.5h-8z'/>
                </svg>
                Back
             </a>
            `;
            this.insertAdjacentElement('beforeend' , back);
        } else {
            this.className = 'row';
            this.innerHTML = `
            <div class='col text-center oops shadow-sm sleek-border-radius'>
                <div class='kata-kata col-md-5 p-lg-5 mx-auto my-5'>
                    <h1 class='display-4 font-weight-normal'>Oops, <br />not found!</h1>
                    <div class='recommendations text-center py-2'>
                        <p>
                            please use another popular keyword like:<br />
                            Chicken, Salmon, Soup, Beef, Burger, Steak, Pizza, Pudding, Chocolate, etc 
                        </p>
                    </div>
                </div>
            </div>
            `;
        }

    }

}
customElements.define('daftar-resep', DaftarResep);