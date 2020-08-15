/**
 * iniResep Class
 */
class IniResep extends HTMLElement {

    connectedCallback() {
      this.src = this.getAttribute("src") || null;
      this.alt = this.getAttribute("alt") || null;
      this.caption = this.getAttribute("caption") || null;
      this.class = this.getAttribute("class") || null;
      this.description = this.getAttribute("description") || null;
      this.url = this.getAttribute("url") || null;

      this.innerHTML = `
      <div class="card">
        <img class="card-img-top ${this.class}" src="${this.src}" 
          alt="${this.alt}" />
          <div class="card-body">
            <h5 class="card-title">${this.caption}</h5>
            <p class="card-text">${this.description}</p>
            <a target="_blank" href="${this.url}" class="btn btn-block btn-dark">Detail</a>
          </div>
      </div>
      `
    }

    set resep(resep) {
      this._resep = resep;
      this.render();
    }

    render() {
      this.innerHTML = `
      <div class="card">
        <img class="card-img-top ${this._resep.class}" src="${this._resep.src}" 
          alt="${this._resep.alt}" />
          <div class="card-body">
            <h5 class="card-title">${this._resep.caption}</h5>
            <p class="card-text">${this._resep.description}</p>
            <a target="_blank" href="${this._resep.url}" class="btn btn-block btn-dark">Detail</a>
          </div>
      </div>
      `
    }

}
customElements.define('ini-resep', IniResep);
