import $ from 'jquery';
import './ini-resep.js';

/**
 * DaftarResep class
 */
class DaftarResep extends HTMLElement {

    connectedCallback() {
        this.className = 'row';
        this.innerHTML = `
        <div class="col p-3 m-3 text-center banner shadow-sm">
            <div class="kata-kata col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Looking for Recipe</h1>
                <kolom-pencarian></kolom-pencarian>
                <div class="recommendations text-left py-2">
                    <span class="recommendation shadow-sm">Chicken</span>
                    <span class="recommendation shadow-sm">Salmon</span>
                    <span class="recommendation shadow-sm">Soup</span>
                    <span class="recommendation shadow-sm">Beef</span>
                    <span class="recommendation shadow-sm">Burger</span>
                    <span class="recommendation shadow-sm">Steak</span>
                    <span class="recommendation shadow-sm">Pizza</span>
                    <span class="recommendation shadow-sm">Pudding</span>
                    <span class="recommendation shadow-sm">Donut</span>
                    <span class="recommendation shadow-sm">Avocado</span>
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
            const alert = document.createElement('div');
            alert.className = 'alert alert-dark alert-dismissible fade show shadow-sm';
            alert.setAttribute('role', 'alert');
            alert.innerHTML = `
            If you like, please give me a <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> to my GitHub <a target="_blank" href="https://github.com/gangsarswapurba/irecipe/">https://github.com/gangsarswapurba/irecipe</a> :)
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            `;
            $('main').prepend(alert);

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
            <div class="col text-center oops shadow-sm">
                <div class="kata-kata col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Oops, <br />not found!</h1>
                    <div class="recommendations text-center py-2">
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
customElements.define("daftar-resep", DaftarResep);