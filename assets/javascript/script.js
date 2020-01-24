$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
            } else {
                if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
            };
        });
    }).scroll();
});
$("#fade-in").hide().fadeIn(3000);
$(".button-1").click(function () {
    document.getElementById('home').scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})
$(".button-2").click(function () {
    document.getElementById('about-me').scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})
$(".button-3").click(function () {
    document.getElementById('portfolio').scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
})
$(".button-4").click(function () {
    document.getElementById('tech').scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})
$(".button-5").click(function () {
    document.getElementById('contact').scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})