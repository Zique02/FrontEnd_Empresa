window.onscroll = ()=> backgroundTopBar();

function backgroundTopBar()
{
    const topBar = document.getElementById("top-bar");

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        topBar.style.background = "#000000";
        topBar.style.background = "-webkit-linear-gradient(to left, #434343, #000000)";
        topBar.style.background = "linear-gradient(to left, #434343, #000000)";

    }
    else
    {
        topBar.style.backgroundColor = "rgba(0,0,0,0)";  
    }
}




