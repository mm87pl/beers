// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

var num = -1;
var timer1 = 0;
var timer2 = 0;
 
function setSlide(id) {
  clearTimeout(timer1);
  clearTimeout(timer2);

  hideSlide();
  num = id-1;
  timer1 = setTimeout("changeSlide()", 500);
}

function nextSlide() {
  clearTimeout(timer1);
  clearTimeout(timer2);

  hideSlide();
  console.log(num);
  timer1 = setTimeout("changeSlide()", 500);
}

function prevSlide() {
  clearTimeout(timer1);
  clearTimeout(timer2);

  hideSlide();
  num-=2;
  timer1 = setTimeout("changeSlide()", 500);
}

function hideSlide() {
  $('#slide'+num).fadeOut('500');
}

function changeSlide() {
  num++; if (num>2) num=0; else if (num<0) num=2
  var id = "#slide" + num;
  $(id).fadeIn('500');

  timer1 = setTimeout("changeSlide()", 5000);
  timer2 = setTimeout("hideSlide()", 4500);
}

