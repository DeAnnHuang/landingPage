function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemTop + 10 <= docViewBottom);
}

$(document).ready(function() {
    show("banner1");
    $(document).on('scroll', function() {
        show("banner2");
        show("In");
        show("fadeIn");
        show("bottomIn");
        show("wall");
        show("dots");
        show("banner3");
    });
});

function show(className) {

    $("." + className + "Box").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).removeClass(className + 'Box').addClass(className);
        }
    });
}
