$(window).on('load resize', function () {
    var windowWidth = window.innerWidth;
    var elements = $(`#sub-area`);
    if (windowWidth >= 768) {
        Stickyfill.add(elements);
    } else {
        Stickyfill.remove(elements);
    }
});

$(`#sub-area li a h3 p`).click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top - 0;
    $('body,html').animate({ scrollTop: pos }, 1000);
    return false;
});