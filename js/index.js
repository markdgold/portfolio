$(document).ready(function() {
    //scroll down on nav click
    $(".nav-div span a").click(function() {
        // console.log('a clicked');
        $('html,body').animate({
                scrollTop: $("main").offset().top - 45
            },
            'slow');
    });

    //fix nav on scroll
    var wrap = $("#nav");

    $(window).on("scroll", function(e) {
        //console.log($(window).scrollTop());
        var scroll = $(window).scrollTop();
        if (scroll > $(window).height() * 0.87) {
            wrap.addClass("fix-nav");
            console.log('fix-search on');
        } else {
            wrap.removeClass("fix-nav");
        }

    });
});
