(function ($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function() {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-blur');
            } else {
                $('.fixed-top').removeClass('bg-blur');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-blur').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-blur').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
         ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    $(".homeslider").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        margin:40,
        loop: true,
        nav : false,
        items:3,
        responsive : {
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });

    $(".partnerSlides").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        margin:40,
        loop: true,
        nav : false,
        items:3,
        responsive : {
            0:{
                items:3
            },
            600:{
                items:5
            }
        }
    });

 $(window).on('scroll', function(){
        if ($("path").is(':visible')){
            $("path").addClass("animated");
        }
 });
    
})(jQuery);

