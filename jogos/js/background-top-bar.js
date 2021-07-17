window.onscroll = ()=> backgroundTopBar();

function backgroundTopBar()
{
    const topBar = document.getElementById("top-bar");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        topBar.style.backgroundColor = "rgba(0,0,0,0.7)";

    }
    else
    {
        topBar.style.backgroundColor = "rgba(0,0,0,0)";  
    }
}




