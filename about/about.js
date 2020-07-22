//NAVIGATION MENU
var navBar =document.querySelector('.navBar');
navBar.addEventListener('click',openNav)
navBar.addEventListener('click',closeNav)
function openNav(){
  document.querySelector('.navBar').style.width= "100%";
}
function closeNav(){
  document.querySelector('.navBar').style.width= "0%";
}
//SCROLL
window.sr = ScrollReveal();
sr.reveal('.anim');
