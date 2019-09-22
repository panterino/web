function menubutton() {
    var nav = document.getElementById("nav");
    var ul = document.getElementById("items-menu");
    var li = document.getElementsByClassName("nav-item");
    if(!nav.classList.contains("menu-desplegable")){
        nav.classList.remove("quitar");
        nav.classList.add("menu-desplegable");
        ul.classList.add("menu-d-e");
        
    }
    else {
        nav.classList.remove("menu-desplegable");
        nav.classList.add("quitar");
        ul.classList.remove("menu-d-e");
        
    }
}