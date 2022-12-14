// Script qui controle la couleur du menu
window.onscroll = function() 
{
    scrollTopBar();
};

function scrollTopBar() 
{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
    document.getElementById("Menu").style.backgroundColor = "#142c00";
    } 
    else
    {
        document.getElementById("Menu").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
}

