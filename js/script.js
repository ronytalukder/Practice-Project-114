//banner veno box
$(document).ready(function () {
    $('.venobox').venobox();
});
//banner veno box


//banner slider
$('.banner_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
//banner slider

//circle progresbar start
$('.circlechart').circlechart();

//circle progresbar end



//testimonial slider
$('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left priv"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
});
//testimonial slider

//business progressbar start
$(document).ready(function () {

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#fc6'
    });
    $('#bar4').barfiller({
        barColor: '#900',
        duration: 3000
    });

});
//business progressbar end


//projects slider part start
$('.project_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

});
//projects slider part end

//counter up start 

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
//counter up start


//Reviews slider start
$('.reviews_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
});
//Reviews slider end




//news slider part start
$('.news_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

});
//news slider part end
