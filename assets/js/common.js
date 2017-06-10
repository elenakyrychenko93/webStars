$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    dots: false
                }
            }
        ]
    });

});

