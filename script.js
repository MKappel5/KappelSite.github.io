// scripts for mobile dropdown menu
function dropdown(){
    document.getElementById("nav-menu").style.height = "180px";
    document.getElementById("menu-open").style.display = "none";
    document.getElementById("menu-close").style.display = "block";
    document.getElementById("nav-list").style.display = "block";
}

function hideDropdown(){
    document.getElementById("nav-menu").style.height = "0px";
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu-close").style.display = "none";
    document.getElementById("nav-list").style.display = "none";
}

$(document).ready(function(){
    $(window).resize(function(){
        document.getElementById("nav-menu").removeAttribute("style");
        document.getElementById("menu-open").removeAttribute("style");
        document.getElementById("menu-close").removeAttribute("style");
        document.getElementById("nav-list").removeAttribute("style");
    });
});
