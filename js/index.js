$(document).ready(function(){
    $('.tours__slider').slick({
        appendArrows: $('.tours__arrows'),
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow:'<div class="arrow arrow--next"><span>&gt;</span></div>',
        prevArrow:'<div class="arrow arrow--prev"><span>&lt;</span></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300
    });
});