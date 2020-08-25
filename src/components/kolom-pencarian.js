class KolomPencarian extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    triggerClick(keyword) {
        this.querySelector('#keyword-resep-yang-dicari').setAttribute('value', keyword);
        this.querySelector('#cari-resep').click();
    }

    get value() {
        return this.querySelector('#keyword-resep-yang-dicari').value;
    }

    set placeholder(text) {
        this._placeholder = text;
        this.querySelector('#keyword-resep-yang-dicari').setAttribute('placeholder', this._placeholder);
    }

    get placeholder() {
        return this._placeholder;
    }

    focus() {
        this.querySelector('#keyword-resep-yang-dicari').focus();
    }

    unfocus() {
        this.querySelector('#keyword-resep-yang-dicari').blur();
    }

    render() {
        this.innerHTML = `
        <div class="input-group">
            <input id="keyword-resep-yang-dicari" type="text" class="form-control rounded-pill-left" placeholder="${this.placeholder}" aria-label="${this.placeholder}" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button id="cari-resep" class="btn btn-light rounded-pill-right" type="button">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search shadow-sm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </button>
            </div>
        </div>
        `;

        this.querySelector('#cari-resep').addEventListener('click', this._clickEvent);
    }

}
customElements.define('kolom-pencarian', KolomPencarian);