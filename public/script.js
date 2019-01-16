var openbutton = document.querySelector('.openbtn');

openbutton.addEventListener('click', openNav);


function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("mainContent").style.marginLeft = "400px";
    openbutton.removeEventListener('click', openNav);
    openbutton.addEventListener('click', closeNav);
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
    openbutton.removeEventListener('click', closeNav);
    openbutton.addEventListener('click', openNav);
}
  