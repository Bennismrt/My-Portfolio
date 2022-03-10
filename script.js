$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
        // toggle menu
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["", "SOCIAL MEDIA SPECIALIST", "GRAPHIC DESIGNER", "FRONEND DEV",],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["", "SOCIAL MEDIA SPECIALIST", "GRAPHIC DESIGNER", "FRONEND DEV",],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});