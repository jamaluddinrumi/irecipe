import 'regenerator-runtime';
import './components/html.js';
import './components/main.js';
import './components/ini-header.js';
import './components/kolom-pencarian.js';
import './components/ini-footer.js';
import './components/ini-resepthumb.js';
import './components/daftar-resep.js';
import SumberData from './components/sumber-data.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
var ImagesLoaded = require('imagesloaded');
import Masonry from 'masonry-layout';

const kolomPencarianElement = document.querySelector('kolom-pencarian');
kolomPencarianElement.placeholder = '';

const iniHeader = document.querySelector('ini-header');

const daftarResepElement = document.querySelector('daftar-resep');

const onTombolCariDiKlik = async () => {

    const hasil = await SumberData.cariResep(kolomPencarianElement.value);

    kolomPencarianElement.placeholder = kolomPencarianElement.value;
    iniHeader.kolomPencarian = kolomPencarianElement;
    
    daftarResepElement.daftarResep = hasil;
    
    ImagesLoaded('daftar-resep', function () {
        new Masonry(daftarResepElement);
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