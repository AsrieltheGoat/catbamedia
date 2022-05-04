// change active status of navbar
function changeActive(id) {
    var navbar = document.getElementById("nav");
    var links = navbar.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].className = "";
    }
    document.getElementById(id).className = "active";
}
