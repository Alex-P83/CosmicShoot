$('.slidescreen__slider').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

//Maskinput 
jQuery(function() {
    jQuery(".phone_numb").mask("8(999) 999-99-99");      
    });   
      jQuery(function() {
    jQuery(".do").mask("A-Z");      
    });

 // Menu button
 (function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();

///Drop menu
$(function(){
  $('.colapse-menu-button .c-hamburger').on('click',function(){
    $('header .menu').slideToggle();
  });
});

// Hidden menu

var menu = $('header .menu'); 
$(window).resize(function(){
    var wid = $(window).width();
    if(wid > 570 && menu.is(':hidden')) {
        menu.removeAttr('style');
    } 
});


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  percentPosition: true
});