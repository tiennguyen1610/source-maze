
$(document).ready(function () {
    console.log('abc');
    $(".scroll-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('.scroll-top').slideDown();
            } else {
                $('.scroll-top').slideUp();
            }
        });
        $('.scroll-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
            return false;
        });
    });
});
