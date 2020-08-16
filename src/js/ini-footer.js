class IniFooter extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <p class="copyright text-center">made with <i class="fa fa-heart"></i> & <i class="fa fa-coffee"></i> by <a href="mailto:jamal@innaweb.com">Jamaluddin Rumi</a></p>
        `;
    };
}
customElements.define('ini-footer', IniFooter);