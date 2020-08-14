import './style.css';
import './js/ini-gambar.js';

// Set Title
document.title = "Latihan React";

// Instantiate IniGambar class 
const logo = document.createElement('ini-gambar');
logo.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg");
logo.setAttribute('alt', "ini logo react");
logo.setAttribute('caption', "logo react");
logo.setAttribute('class', "logo");

document.body.appendChild(logo);

