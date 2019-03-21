
var play = document.getElementById('play');
var background = document.getElementById('home');
var music = document.getElementById('music');

//Play/Pause music and toggle background animation
play.addEventListener('click', function  toggle() {
  
  if( play.classList.contains('fa-play') ) {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    background.classList.add('animation');
    music.play();
  } 
  else {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
    background.classList.remove('animation');
    music.pause();
  }
});

//Navbar toggle button animation
//black background on menu collapse open
var navToggle = document.getElementsByClassName('navbar-toggler');

var navbar = document.getElementById('navbar');

navToggle[0].addEventListener('click', function navToggleAnim() {

  navToggle[0].classList.toggle('navtoggle');
  //dark background menu
  navbar.classList.add('black-nav');
  
});

//Remove transparency of navbar on scroll
window.onscroll = scroll;

function scroll() {
  if( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add('black-nav');
  } else {
    navbar.classList.remove('black-nav');
  }
}













