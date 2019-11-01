$(function() {

    // slider
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1085,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });

    // hamburger menu
    $('.btn__menu').on('click', function() {
        $('.menu__list').slideToggle();
    });


});