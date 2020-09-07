$(document).ready(function () {
    $('.slider-block__slick-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    $('.slider-product').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

