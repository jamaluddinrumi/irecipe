class KolomPencarian extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#cari-resep').value;
    }

    render() {
        this.innerHTML = `
        <div class="input-group">
            <input type="text" class="form-control" placeholder="e.g. beef, chicken, etc" aria-label="e.g. beef, chicken, etc" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button id="cari-resep" class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
            </div>
        </div>
        `;

        this.querySelector('#cari-resep').addEventListener('click', this._clickEvent);
    }

}
customElements.define('kolom-pencarian', KolomPencarian);