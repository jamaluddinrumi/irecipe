class KolomPencarian extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
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

    render() {
        this.innerHTML = `
        <div class="input-group">
            <input id="keyword-resep-yang-dicari" type="text" class="form-control" placeholder="${this.placeholder}" aria-label="${this.placeholder}" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button id="cari-resep" class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
            </div>
        </div>
        `;

        this.querySelector('#cari-resep').addEventListener('click', this._clickEvent);
    }

}
customElements.define('kolom-pencarian', KolomPencarian);