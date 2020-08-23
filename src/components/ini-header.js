class IniHeader extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.className = 'header';
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow">
            <div class="container-fluid">
                <a class="navbar-brand font-weight-bold" href="${window.location.href}">
                    <span class="font-weight-lighter">i</span>Recipe
                </a>
                <span class="collapse navbar-collapse slogan text-white font-italic font-weight-lighter">
                    "Remember Recipes, Remember iRecipe!"
                </span>
                <div class="" id="navbar-search">
                    <ul class="nav navbar-nav">
                    </ul>
                </div>
            </div>
        </nav>
        `;
    };

    set kolomPencarian(kolomPencarianElement) {
        this._kolomPencarianElement = kolomPencarianElement;

        const navbar = this.querySelector('#navbar-search');
        navbar.appendChild(this._kolomPencarianElement);
    }

    get kolomPencarian() {
        const navbar = this.querySelector('#navbar-search');
        navbar.removeChild(this._kolomPencarianElement);
        
        return this._kolomPencarianElement;
    }
}
customElements.define('ini-header', IniHeader);