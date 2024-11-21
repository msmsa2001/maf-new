(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
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
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -9);
                $('.navbar-toggler-icon').addClass('black-icon'); // Add this line to change color
            }else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
                $('.navbar-toggler-icon').removeClass('black-icon'); // Remove class to revert to white
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -9);
                $('.navbar-nav .nav-link').addClass('text-black'); // Add this line to change color
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
                $('.navbar-nav .nav-link').removeClass('text-black'); // Remove class to revert to white
            }
        }
    });
    
    // Toggle navbar toggler icon between hamburger and cross on click
$('.navbar-toggler').click(function () {
    $(this).find('.navbar-toggler-icon').toggleClass('open'); // Toggle the cross icon on click
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

 // Causes carousel
 $(".causes-carousel").owlCarousel({
    autoplay: true,
    animateIn: 'slideInDown',
    animateOut: 'slideOutDown',
    items: 1,
    smartSpeed: 450,
    dots: false,
    loop: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
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

    
})(jQuery);
// portolio 

        document.querySelectorAll('.img_gallery .img img').forEach(image =>{
            image.onclick=()=>{
                document.querySelector('.popup-image').style.display = 'block';
                document.querySelector('.popup-image img').src = image.getAttribute('src')
            }
        })
        document.querySelector('.popup-image span').onclick=()=>{
            document.querySelector('.popup-image').style.display = 'none'; 
        }
