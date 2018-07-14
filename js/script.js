// Fixed Navbar
$(window).scroll(function(){
    var nav = $('.nav')
        navOffetTop = $('.checkTop').offset().top,
        scroll = $(window).scrollTop(),
        distance = scroll - navOffetTop;
    if (distance >= 0) nav.addClass('nav-fixed');
    else nav.removeClass('nav-fixed');
});

// Skill-animation
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var width = $(window).width();
    if (width >= 111 && scroll >= 960 && scroll < 2100) {
        // LineProgressbar
        $('#html').LineProgressbar({
            percentage: 85
        });
        $('#css3').LineProgressbar({
            percentage: 90
        });
        $('#javascript').LineProgressbar({
            percentage: 65
        });
        $('#sass').LineProgressbar({
            percentage: 70
        });
        // Circle bar
        $('.photoshop').circlechart();
        $('.illustrator').circlechart();
        $('.lightroom').circlechart();
        $('.premiere').circlechart();
    };
});

// My map
function initMap() {
    var home = {lat: 20.973613, lng: 105.817847};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: home
    });
    var marker = new google.maps.Marker({
        position: home,
        map: map
    });
}

// Contact-info-animation
$(window).scroll(function(){
    var contactInfo = $('.contact__info'),
        scroll = $(window).scrollTop(),
        width = $(window).width();

    if (width >= 1600 && scroll >= 4790) contactInfo.addClass('contact__info--animation');
    else if (width >= 1366 && width < 1600 && scroll >= 4080) contactInfo.addClass('contact__info--animation');
    else contactInfo.removeClass('contact__info--animation');

});


