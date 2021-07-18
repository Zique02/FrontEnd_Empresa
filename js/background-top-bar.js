// Monitora evento de rolagem da pagina
window.onscroll = ()=> backgroundTopBar();

// Altera propriedades de estilo para determinado elemento baseado em condições
function backgroundTopBar()
{
    const topBar = document.getElementById("top-bar");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        topBar.style.backgroundColor = "rgba(0,0,0,0.9)";

    }
    else
    {
        topBar.style.backgroundColor = "rgba(0,0,0,0)";  
    }
}