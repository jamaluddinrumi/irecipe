import nlbr from 'nl2br';

/**
 * iniResep Class
 */
class IniResepThumb extends HTMLElement {

    set resep(resep) {
      this._resep = resep;
      this.render();
    }

    render() {

      const ingredients = [];
      for (let index = 1; index <= 20; index++) {
        const ingredientKey = 'strIngredient' + index;
        const measureKey = 'strMeasure' + index;
        const ingredient = this._resep[ingredientKey];
        const measure = this._resep[measureKey];
        if (ingredient !== null && ingredient !== '') {
          const value = measure.toLowerCase() + ' ' + ingredient.toLowerCase();
          ingredients.push(value);
        }
      }

      this.className += 'col col-md-6 col-lg-4 mb-4';
      this.className += ' ';
      this.className += this._resep.strCategory.toLowerCase();
      this.innerHTML = `
        <a class='receipe-link' target='_blank' href='${this._resep.strSource}'>
          <div class='card shadow-sm'>
            <div class='card-header py-4'>
              <h3 class='text-center'>${this._resep.strMeal}</h3>
            </div>
            <img class='card-img-top' src='${this._resep.strMealThumb}' alt='${this._resep.alt}' />
          </div>
        </a>
      `;
    }

}
customElements.define('ini-resepthumb', IniResepThumb);
