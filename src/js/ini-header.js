class IniHeader extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand font-weight-bold" href="https://irecipe.innaweb.com/dist/"><span class="font-weight-lighter">i</span>Recipe</a><span class="collapse navbar-collapse slogan text-white font-italic font-weight-lighter">"Remember Recipes, Remember iRecipe!"</span>
            <div class="" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                </ul>
            </div>
        </nav>
        `;
    };
}
customElements.define('ini-header', IniHeader);