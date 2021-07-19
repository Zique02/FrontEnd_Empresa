// Script para controle do menu 'hamburguer'

// Busca elementos do html e armazena-os em variaveis
const menu=document.getElementById('toggle-screen');

// Essa função, quando executada, propriedades de estilo de determinado elemento
function displayMenuToggle(){
    menu.style.display = 'flex';
}

// Essa função, quando executada, propriedades de estilo de determinado elemento
function fechar(){
    menu.style.display = 'none';
}

// Essa função, quando executada, altera a propriedades display
//  e redireciona para outra posição na pagina
function fecharRedirecionarHome(){
    menu.style.display = 'none';
    window.location.href("#");
}

// Essa função, quando executada, altera a propriedades display
//  e redireciona para outra posição na pagina
function fecharRedirecionarJogos(){
    menu.style.display = 'none';
    window.location.href("#jogos");
}

// Essa função, quando executada, altera a propriedades display
//  e redireciona para outra posição na pagina
function fecharRedirecionarContatos(){
    menu.style.display = 'none';
    window.location.href("#contatos");
}

// Essa função, quando executada, altera a propriedades display
//  e redireciona para outra posição na pagina
function fecharRedirecionarAventura(){
    menu.style.display = 'none';
    window.location.href("#jogos-aventura");
}

// Essa função, quando executada, altera a propriedades display
//  e redireciona para outra posição na pagina
function fecharRedirecionarAcao(){
    menu.style.display = 'none';
    window.location.href("#jogos-acao");
}

function fecharRedirecionarLoin(){
    menu.style.display = 'none';
    window.location.href("../index.html");
}