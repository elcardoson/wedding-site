/* Dribbble Shots using Jribbble plugin */

jQuery(document).ready(function() {
    $("#startHeader").height($(window).height());
    $(window).resize(function() {
        $("#startHeader").height($(window).height());
        $("#startHeader").css("min-height", "600px")
    });

    $("#when").height($(window).height());
    $(window).resize(function() {
        $("#when").minHeight($(window).height());
        $(".showcase-info").css("min-height", "600px")
    });

    $("#when").height($(window).height());
    $(window).resize(function() {
        $("#when").height($(window).height());
        $("#when").css("min-height", "600px")
    })
});


$(function() {
    $(".service").hover(function() {
        $("#when").addClass($(this).data("when")).addClass("active");
        $("#when p").html($(this).data("tip"))
    }, function() {
        $("#when").removeClass();
        $("#when p").html("You can find me all over the web")
    })
});


jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});

