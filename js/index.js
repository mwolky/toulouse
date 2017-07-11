$(document).ready(function(){
    $('.tours__slider').slick({
        appendArrows: $('.tours__arrows'),
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow:'<div class="arrow arrow--next"><span class="chevron"></span></div>',
        prevArrow:'<div class="arrow arrow--prev"><span class="chevron"></span></div>',
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 962,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(window).on('scroll',function(){
        var header = $('.js-set-fixed');
        if($(window).scrollTop()>0){
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    });
    $('.js-move-to-section').on('touchstart click tap',function(e){
        e.preventDefault();
        var sectionId = $(this).attr("href");
        var topOffset = $(sectionId).offset().top-49;
        $('html,body').animate({scrollTop:topOffset}, '750', 'swing');
        window.history.pushState({},"id",sectionId);
    });


    $('.js-underline-item').on('mouseover',function(){
        $('.menu__underline').css({
            'width': $(this).width(),
            'left': $(this).position().left + 15
        });
    });
    var hash;
    $(document).on('scroll', function(){
        $('.js-section').each(function(){
            if ($(this).offset().top - 75 < window.pageYOffset && $(this).offset().top + $(this).height() - 75 > window.pageYOffset ){
                hash = $(this).attr('id');
                history.pushState({},"id","#"+hash);
                var section = $('.js-underline-item').find('a[href="#'+hash+'"]').parent();
                var left = section.position().left;
                var width = section.width();
                $('.menu__underline').css({
                    'width': width,
                    'left': left + 15
                });
            }
        });
    });
});