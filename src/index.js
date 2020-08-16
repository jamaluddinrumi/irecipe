import 'regenerator-runtime';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './js/ini-resep.js';
import './js/daftar-resep.js';
import SumberData from './js/sumber-data.js';
import Masonry from 'masonry-layout';
var ImagesLoaded = require('imagesloaded');
import Pace from 'pace-js-amd-fix';
import 'pace-js-amd-fix/themes/black/pace-theme-loading-bar.css';

Pace.start();

async function onTombolCariDiKlik() {

    const hasil = await SumberData.cariResep('salmon');

    const daftarResepElement = document.querySelector('daftar-resep');
    daftarResepElement.resepresep = hasil;

    // console.log(hasil);

    ImagesLoaded('daftar-resep', function () {
        // console.log('images loaded');
        new Masonry(daftarResepElement);
    });
    
}

setTimeout(onTombolCariDiKlik, 1500);