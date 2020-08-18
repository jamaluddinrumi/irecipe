import $ from 'jquery';

const mainElement = document.querySelector('main');
mainElement.setAttribute('role', 'main');
mainElement.className = 'container';

const alert = document.createElement('div');
alert.className = 'alert alert-dark alert-dismissible fade show';
alert.setAttribute('role', 'alert');
alert.innerHTML = `
    If you like, please give me a star at my GitHub <a target="_blank" href="https://github.com/gangsarswapurba/irecipe/">https://github.com/gangsarswapurba/irecipe</a> :)
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    `;
$('main').prepend(alert);