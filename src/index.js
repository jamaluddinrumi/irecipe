import 'regenerator-runtime';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './js/ini-resep.js';
import './js/daftar-resep.js';
import SumberData from './js/sumber-data.js';

async function onTombolCariDiKlik() {
    const hasil = await SumberData.cariResep('beef');

    const daftarResepElement = document.querySelector('daftar-resep');
    daftarResepElement.resepresep = hasil;
}

setTimeout(onTombolCariDiKlik, 1500);