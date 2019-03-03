$(document).ready(function () {

    ////////////////////////////////////////
    // Language and Search Toggles Shown
    ////////////////////////////////////////

    $('#global-search').on('show.bs.collapse', function () {
        $('#mobile-menu').collapse('hide');
    });

    $('#mobile-menu').on('show.bs.collapse', function () {
        $('#global-search').collapse('hide');
    });

    ////////////////////////////////////////
    // Back to top
    ////////////////////////////////////////

    var scroll_speed = 800;

    if( $('#back-to-top').length ){

        $('#back-to-top > a').click(function() {
            $('body, html').animate({
                scrollTop: 0
            }, scroll_speed );
        });

        $(window).scroll(function() {

            var window_scroll = $(document).scrollTop();
            var primary_content = $('#primary-content').offset().top;

            if ( window_scroll > primary_content ) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }

        }).scroll();
    }

});