//remove card
const card = document.querySelector('.card');
const close = document.querySelector('.close');
    close.addEventListener('click', function () {
        card.remove(close);
    } )
