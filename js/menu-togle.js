// Script para controle do menu 'hamburguer'

// Busca elementos do html e armazena-os em variaveis
const menu=document.getElementById('toggle-screen');
const closeButton=document.getElementById('close');
const body=document.getElementsByTagName('body');

// Essa função, quando executada, propriedades de estilo de determinado elemento
function displayMenuToggle(){
    menu.style.display = 'flex';
}

// Essa função, quando executada, propriedades de estilo de determinado elemento
function fechar(){
    menu.style.display = 'none';
}