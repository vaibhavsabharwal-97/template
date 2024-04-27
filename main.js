$(document).ready(function(){

    // Toggle Menu
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Activate Menu Item on Scroll
    $(window).on('load scroll',function(){

        // Reset menu icon and navigation state
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Check each section on scroll
        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            // If the section is in view, highlight its corresponding menu item
            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    // Switch Menu Image
    $('.list .btn').click(function(){
        // Activate the clicked button and deactivate others
        $(this).addClass('active').siblings().removeClass('active');
        // Change the image source based on the clicked button
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});
