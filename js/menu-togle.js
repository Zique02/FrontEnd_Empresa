const menu=document.getElementById('toggle-screen');
const closeButton=document.getElementById('close');
const body=document.getElementsByTagName('body');


function displayMenuToggle(){
    menu.style.display = 'flex';
}

function fechar(){
    menu.style.display = 'none';
}