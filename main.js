(function ($) {
    "use strict"

    //Navbar On Scrolling
    $(window).scroll(function (){
        if ($(this).scrollTop() > 200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }else{
            $('.navbar').fadeOut('slow').css('display','none');
        }
    });

    //Portfolio Isotope & Filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item', 
        layoutMode: 'fitRows'
    });
    $('#portfolio-filters li').on('click', function (){
        $('#portfolio-filters li').removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    //Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        items: 1
    });


    //Typed Initiated
    if ($('.typed-text-output').length == 1){

        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    }



    // // Skill Bar
    // $('.skill').waypoint(function (){
    //     $('.progress .progress-bar').each(function (){
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});



})(jQuery);
