var flippedCard = 0
var flip = document.getElementsByClassName('card')

for (var i= 0; i < flip.length; i++){
  console.log(i)
  flip[i].style.order = Math.floor(Math.random() * 12)
  flip[i].addEventListener("click", cardFlip)
  }
function cardFlip (event) {
  console.log(flippedCard)
  flippedCard +=1
  var card = event.target.parentElement
  card.style.transform= "rotateY(180deg)"
  card.style.transform= "200px"

  console.log('click')
  if(flippedCard == 1){
  card1 = event.target.parentElement
}else if(flippedCard == 2){
  card2 = event.target.parentElement
  matchingCard()
 }
}
function matchingCard(){
if(card1.dataset.framework === card2.dataset.framework){
  flippedCard = 0
  console.log('remove')
  colorChange()

} else {
  flippedCard = 0
  flipBack()
}
function colorChange(){
  setTimeout(() => {
    var front = document.getElementsByClassName('front')
    for (var i= 0; i < front.length; i++){
    }
  card1.style.visibility= "hidden"
  card2.style.visibility= "hidden"},200)
  console.log(cardFlip)
}
function flipBack(){
  flippedCard = 0
  console.log('flipped')
setTimeout(() => {
card1.style.transform= "rotateY(0deg)"
card1.style.transform= "200px"
card2.style.transform= "rotateY(0deg)"
card2.style.transform= "200px"}, 1500)
}
}
  function myButton(){
  location.reload()

}
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
