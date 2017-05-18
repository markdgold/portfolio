$(document).ready(function() {
    $(".nav-div").click(function() {
        // console.log('a clicked');
        $('html,body').animate({
                scrollTop: $(".nav-div").offset().top
            },
            'slow');
    });
    var wrap = $("#nav");

    $(window).on("scroll", function(e) {
        console.log($(window).scrollTop());
        var scroll = $(window).scrollTop();
        if (scroll > 734) {
            wrap.addClass("fix-nav");
            console.log('fix-search on')
        } else {
            wrap.removeClass("fix-nav");
        }

    });
});
