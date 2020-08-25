import 'regenerator-runtime';
import './components/html.js';
import './components/main.js';
import './components/ini-header.js';
import './components/footer.js';
import './components/kolom-pencarian.js';
import './components/ini-resepthumb.js';
import './components/daftar-resep.js';
import 'bootstrap';
import './css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
var ImagesLoaded = require('imagesloaded');
import Masonry from 'masonry-layout';
import * as mdb from 'mdb-ui-kit';
const axios = require('axios');

const kolomPencarianElement = document.querySelector('kolom-pencarian');
kolomPencarianElement.placeholder = '';

const iniHeader = document.querySelector('ini-header');

const daftarResepElement = document.querySelector('daftar-resep');

const onTombolCariDiKlik = async () => {

    const hasil = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`+kolomPencarianElement.value);

    console.log(hasil);

    kolomPencarianElement.placeholder = kolomPencarianElement.value;
    iniHeader.kolomPencarian = kolomPencarianElement;
    
    daftarResepElement.tampilanDetailResep = false;
    daftarResepElement.daftarResep = hasil.data.meals;
    
}

kolomPencarianElement.clickEvent = onTombolCariDiKlik;
kolomPencarianElement.focus();

const recommendationElement = document.querySelectorAll('.recommendation');
recommendationElement.forEach((recc) => {
    recc.addEventListener('click', (event) => {
        kolomPencarianElement.triggerClick(recc.innerHTML);
    });
});