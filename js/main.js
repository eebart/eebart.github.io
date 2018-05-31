
function downloadResume() {

};
function downloadCV() {

};

function main() {

(function () {
   'use strict';

   (function($) {
     $(document).ready(function() {

       // hide .navbar first
       $(".navbar").hide();

       // fade in .navbar
       $(function() {
         $(window).scroll(function() {

           // set distance user needs to scroll before we start fadeIn
           if ($(this).scrollTop() > 200) {
             $('.navbar').fadeIn();
           } else {
             $('.navbar').fadeOut();
           }
         });
       });

     });
   }(jQuery));

   // Preloader */
   $(window).on('load', function() {

     // will first fade out the loading animation
     $("#status").fadeOut("slow");

     // will fade out the whole DIV that covers the website.
     $("#preloader").delay(500).fadeOut("slow").remove();

   })

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
    });

    GitHubActivity.feed({
    	username: "eebart",
    	// repository: "your-repo", // optional
    	selector: "#feed",
    	limit: 5 // optional
    });

    // Show Menu on Book
    // $(window).bind('scroll', function() {
    //     var navHeight = $(window).height() - 100;
    //     if ($(window).scrollTop() > navHeight) {
    //         $('.navbar-default').addClass('on');
    //     } else {
    //         $('.navbar-default').removeClass('on');
    //     }
    // });
    //
    // $('body').scrollspy({
    //     target: '.navbar-default',
    //     offset: 80
    // })

  // jQuery Parallax
  // function initParallax() {
  //   $('#intro').parallax("100%", 0.3);
  //   $('#contact').parallax("100%", 0.3);
  //   $('#github').parallax("100%", 0.3);
  // }
  // initParallax();

  // 	// Pretty Photo
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false
	// });

}());


}
main();
