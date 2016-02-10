function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemTop + 100 <= docViewBottom);
}

$(document).ready(function() {
    show("banner");
    $(document).on('scroll', function() {
        show("banner");
    });
});

function show(className) {

    $("." + className + "Box").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).removeClass(className + 'Box').addClass(className);
            // console.log("ok");
        }
        // else console.log("opps");å
    });
}
