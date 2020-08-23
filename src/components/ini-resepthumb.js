import nlbr from 'nl2br';
import Masonry from 'masonry-layout';
import SumberData from './sumber-data.js';

/**
 * IniResepThumb Class
 */
class IniResepThumb extends HTMLElement {

    set resep(resep) {
      this._resep = resep;
      this.render();
    }

    render() {
      this.className += 'col-6 col-md-6 col-lg-4 mb-4';
      this.className += ' ';
      this.className += this._resep.strCategory.toLowerCase();
      this.id = this._resep.idMeal;
      this.innerHTML = `
          <div class='card shadow-sm'>
            <div class='card-header pt-3'>
              <h3 class='text-center'>${this._resep.strMeal}</h3>
            </div>
            <img class='card-img-top' src='${this._resep.strMealThumb}' alt='${this._resep.strMeal}' />
          </div>
      `;

      this.addEventListener('click', this.onKlik);
    }

    async onKlik () {
        const hasil = await SumberData.cariResepBerdasarkanId(this.id);

        const daftarResepElement = document.querySelector("daftar-resep");
        daftarResepElement.tampilanDetailResep = true;
        daftarResepElement.daftarResep = hasil;
    }

    

}
customElements.define('ini-resepthumb', IniResepThumb);
