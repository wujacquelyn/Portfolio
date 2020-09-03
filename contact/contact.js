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

//EMAIL form
$('form').on('submit', (e) => {
  e.preventDefault();
  const subject = $('#name').val().trim();
  const email = $('#email').val().trim();
  const text = $('#message').val().trim();

  const data = {
    subject, //name of the person
    email,
    text //message
  };

//  $.post('/contact', data, function() {
  //    console.log('Server recieved our data');
  //  });
    $.post('/contact', data)
    .then(() => {
        window.location.href= "/contact/sent";
    })
      console.log('Server recieved our data');
  });;
