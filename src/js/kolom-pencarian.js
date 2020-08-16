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
        <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="e.g. beef, chicken, etc" aria-label="Search">
            <button id="cari-resep" class="btn btn-light my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
        </form>
        `;

        this.querySelector('#cari-resep').addEventListener('click', this._clickEvent);
    }

}
customElements.define('kolom-pencarian', KolomPencarian);