const fundo = document.querySelector('.search-in');
const bcg = document.querySelector('.search');
const borda = document.querySelector('.in-srch');
const sugestaoPesquisa = document.querySelector('.box-result');
const IconApps = document.querySelector('.icon');
const cardApps = document.querySelector('.card-apps');


///// Barra de Pesquisa
fundo.addEventListener('click', () => {

    if (bcg.classList.contains('bcg-default')) {
        bcg.classList.remove('bcg-default');
        bcg.classList.add('bcg-on');

        borda.classList.remove('border-off');
        borda.classList.add('border-none');

        sugestaoPesquisa.style.visibility = 'visible';
        borda.style.backgroundColor = 'rgb(46, 46, 46)';
    }
});

const pesquisa = document.addEventListener('click', (event) => {

    const cliqueFora = fundo.contains(event.target);
    const janela = sugestaoPesquisa.contains(event.target);

    if (!cliqueFora && !janela && bcg.classList.contains('bcg-on')) {
        bcg.classList.remove('bcg-on');
        bcg.classList.add('bcg-default');

        borda.classList.remove('border-none');
        borda.classList.add('border-off');

        sugestaoPesquisa.style.visibility = 'hidden';
        borda.style.backgroundColor = '';
    }
});



///// Janela de Apps
let cardVisivel = false;
IconApps.addEventListener('click', ()=>{
    if (cardVisivel) {
        cardApps.style.visibility = 'hidden';
        cardVisivel = false;
    } else {
        cardApps.style.visibility = 'visible';
        cardVisivel = true;
    }
    
});

const apps = document.addEventListener('click', (event) => {

    const cliqueFora = IconApps.contains(event.target);
    const janela = cardApps.contains(event.target)
    
    if(!cliqueFora && !janela) {
        cardApps.style.visibility = 'hidden';
        cardVisivel = false;
    } 
});  



