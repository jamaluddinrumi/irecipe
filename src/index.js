import 'regenerator-runtime';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/main.js';
import './js/ini-header.js';
import './js/kolom-pencarian.js';
import './js/ini-footer.js';
import './js/ini-resep.js';
import './js/daftar-resep.js';
import SumberData from './js/sumber-data.js';
import './css/style.css';
var ImagesLoaded = require('imagesloaded');
import Masonry from 'masonry-layout';
import Pace from 'pace-js-amd-fix';
import 'pace-js-amd-fix/themes/black/pace-theme-loading-bar.css';

Pace.start();

const kolomPencarianElement = document.querySelector('kolom-pencarian');
kolomPencarianElement.placeholder = '';

const onTombolCariDiKlik = async () => {

    const hasil = await SumberData.cariResep(kolomPencarianElement.value);
    kolomPencarianElement.placeholder = kolomPencarianElement.value;

    const daftarResepElement = document.querySelector('daftar-resep');
    daftarResepElement.resepresep = hasil;

    // console.log(kolomPencarianElement.value);
    // console.log(hasil);

    ImagesLoaded('daftar-resep', function () {
        // console.log('images loaded');
        new Masonry(daftarResepElement);

        const navbar = document.querySelector('#navbarCollapse');
        navbar.appendChild(kolomPencarianElement);
    });
    
}

kolomPencarianElement.clickEvent = onTombolCariDiKlik;