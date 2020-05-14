// Auto HOver

// $('ul.nav li.dropdown').hover(function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
// });

$(document).ready(function(){
   $('.dropdown-submenu a.test').on("click", function(e){
     $(this).next('ul').toggle();
     e.stopPropagation();
     e.preventDefault();
   });
 });

