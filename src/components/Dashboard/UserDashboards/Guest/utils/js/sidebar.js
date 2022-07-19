function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




/* js by Vipin */



$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

/*$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});*/