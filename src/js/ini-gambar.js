/**
 * IniGambar Class
 */
class IniGambar extends HTMLElement {

    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;
        this.class = this.getAttribute("class") || null;

        this.innerHTML = `
      <figure>
        <img src="${this.src}" 
          alt="${this.alt}" class="${this.class}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `
    }

}
customElements.define('ini-gambar', IniGambar);
