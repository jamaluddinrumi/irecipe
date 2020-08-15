import 'regenerator-runtime';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './js/ini-resep.js';
import './js/daftar-resep.js';
import ReactLogo from './img/react-icon.svg';
import SumberData from './js/sumber-data.js';

// Instantiate IniGambar class 
// let logo = document.createElement('ini-resep');
// logo.setAttribute('src', ReactLogo);
// logo.setAttribute('alt', "ini logo react");
// logo.setAttribute('caption', "React");
// logo.setAttribute('class', "logo");
// logo.setAttribute('description', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
// logo.setAttribute('url', "https://reactjs.org");
// document.body.appendChild(logo);

async function onTombolCariDiKlik() {
    const test = await SumberData.cariResep('egg');

    document.body.innerText = JSON.stringify(test);
}

setTimeout(onTombolCariDiKlik, 1500);