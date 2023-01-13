
let i = (sessionStorage.getItem('count'))? sessionStorage.getItem('count') :0; //operatore ternario
setInterval(conta, 1000);
function conta(){
    i++;
    document.querySelector('#counter').innerHTML = + i   + 'secondi in questa sessione';
    sessionStorage.setItem('count', i);
}
