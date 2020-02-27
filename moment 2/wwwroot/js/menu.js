$(document).ready(function () {

    $(window).scroll(function () {
        if (scrollY > 100) {
            $('#header-wrapper').css("background", " #11151f")
            $('#header-wrapper').css("transition", " ease-in-out 0.5s")
            $('#header-wrapper').css("padding-bottom", "10px")
            $('#header-wrapper').css("border-bottom", "1px solid white")
            $('#header-wrapper').css("width", "100%")
        } else {
            $('#header-wrapper').css("background", "transparent")
            $('#header-wrapper').css("transition", " ease-in-out 0.5s")
            $('#header-wrapper').css("padding-bottom", "10px")
            $('#header-wrapper').css("border-bottom", "none")
            $('#header-wrapper').css("width", "100%")
        }
    })
});
    

window.addEventListener('click', function (e) {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    var test = document.querySelector('.navigation--active');

    $(test).on('click', test, function () {
        hamburger.classList.remove('hamburger--active');
        nav.classList.remove('navigation--active');
    });
})
