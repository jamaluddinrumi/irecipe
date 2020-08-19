import 'regenerator-runtime';
import './js/html.js';
import './js/main.js';
import './js/ini-header.js';
import './js/kolom-pencarian.js';
import './js/ini-footer.js';
import './js/ini-resep.js';
import './js/daftar-resep.js';
import SumberData from './js/sumber-data.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
var ImagesLoaded = require('imagesloaded');
import Masonry from 'masonry-layout';
import Pace from 'pace-js-amd-fix';
import 'pace-js-amd-fix/themes/black/pace-theme-loading-bar.css';
import './css/pace.css';

Pace.start();

const kolomPencarianElement = document.querySelector('kolom-pencarian');
kolomPencarianElement.placeholder = '';

const iniHeader = document.querySelector('ini-header');

const daftarResepElement = document.querySelector('daftar-resep');

const onTombolCariDiKlik = async () => {

    const hasil = await SumberData.cariResep(kolomPencarianElement.value);

    daftarResepElement.resepresep = hasil;

    ImagesLoaded('daftar-resep', function () {
        new Masonry(daftarResepElement);

        kolomPencarianElement.placeholder = kolomPencarianElement.value;
        iniHeader.kolomPencarian = kolomPencarianElement;
    });
    
}

kolomPencarianElement.clickEvent = onTombolCariDiKlik;
kolomPencarianElement.focus();

const recommendationElement = document.querySelectorAll('.recommendation');
recommendationElement.forEach((recc) => {
    recc.addEventListener('click', (event) => {
        kolomPencarianElement.triggerClick(recc.innerHTML);
    });
});