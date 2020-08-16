class IniHeader extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow">
            <a class="navbar-brand font-weight-bold" href="${window.location.href}"><span class="font-weight-lighter">i</span>Recipe</a><span class="collapse navbar-collapse slogan text-white font-italic font-weight-lighter">"Remember Recipes, Remember iRecipe!"</span>
            <div class="" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                </ul>
            </div>
        </nav>
        `;
    };

    set kolomPencarian(kolomPencarianElement) {
        this._kolomPencarianElement = kolomPencarianElement;

        const navbar = this.querySelector('#navbarCollapse');
        navbar.appendChild(this._kolomPencarianElement);
    }

    get kolomPencarian() {
        const navbar = this.querySelector('#navbarCollapse');
        navbar.removeChild(this._kolomPencarianElement);
        
        return this._kolomPencarianElement;
    }
}
customElements.define('ini-header', IniHeader);