import _ from 'lodash';
import { parseJSON } from 'jquery';
import nlbr from 'nl2br';

/**
 * iniResep Class
 */
class IniResep extends HTMLElement {

    set resep(resep) {
      this._resep = resep;
      // console.log(this._resep);
      this.render(this._resep);
    }

    render() {
      console.log(this._resep);
      this.className = this._resep.strCategory.toLowerCase();
      this.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${this._resep.strMealThumb}" 
          alt="${this._resep.alt}" />
          <div class="card-body">
            <h5 class="card-title">${this._resep.strMeal}</h5>
            <p class="card-text">${nlbr(this._resep.strInstructions)}</p>
            <a target="_blank" href="${this._resep.strSource}" class="btn btn-block btn-dark">Source</a>
          </div>
      </div>
      `
    }

}
customElements.define('ini-resep', IniResep);
