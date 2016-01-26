function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemTop + 100 <= docViewBottom);
}

$(document).ready(function() {
    showBanner();

    $(document).on('scroll', function() {
        showBanner();
    });
});

function showBanner() {

    $(".Box").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).removeClass('Box').addClass('banner');
            // console.log("ok");
        }
        // else console.log("opps");å
    });
}
