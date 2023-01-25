// TOOGLE MOBILE MENU
function toogleMobileMenu(){
    var x = document.getElementById("bars");
    if(x.style.display === "none"){
        document.getElementById("bars").style.display="flex";
        document.getElementById("xmark").style.display="none";
        document.querySelector(".menu-items-mobile").style.display="none";
        document.querySelector(".menu-items-mobile").removeAttribute("id");
    }else{
        document.getElementById("bars").style.display="none";
        document.getElementById("xmark").style.display="flex";
        document.querySelector(".menu-items-mobile").style.display="flex";
        document.querySelector(".menu-items-mobile").setAttribute("id", "mobile-menu-display");
    }
}

function removeTopBar(){
    document.querySelector(".top-bar").style.display="none";
}