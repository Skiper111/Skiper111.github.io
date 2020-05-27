var div = document.getElementsByClassName('portfolioImg'),
    anchor = document.getElementsByClassName('anchor');

for (let item of div) {
    item.addEventListener('mouseenter', show);
    item.addEventListener('mouseleave', hide);
}

function show (e) {
    let text = e.target.children[1],
        button = e.target.children[0];
    if (text.style.top === '' || text.style.top === '0px') {
        text.style.top = '1rem';
        text.style.opacity = '1';
        text.style.visibility = 'visible';
    }
    if (button.style.left === '' || button.style.left === '0px') {
        button.style.left = '6.8rem';
        button.style.opacity = '1';
        button.style.visibility = 'visible';
    }
}

function hide(e) {
    let text = e.target.children[1],
        button = e.target.children[0];
    if (text.style.top === '1rem') {
        text.style.top = '0';
        text.style.opacity = '0';
        text.style.visibility = 'hidden';
    }
    if (button.style.left === '6.8rem') {
        button.style.left = '0';
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
    }
}

for (let item of anchor) {
    item.addEventListener('click', animatedHref)
}

function animatedHref(e) {
        e.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
}

$(window).scroll(function () {
    let navWrap = $('.navWrap'),
        page = $('#wrap').height();
        nav = $('.nav'),
        menu = $('.menu');
    if ($(this).scrollTop() >= page) {
        navWrap.addClass("fixedNavWrap");
        nav.addClass("fixedNav");
        menu.addClass("fixedMenu");
    } else {
        navWrap.removeClass("fixedNavWrap");
        nav.removeClass("fixedNav");
        menu.removeClass("fixedMenu");
    }
});

$('.menuMobile').on('click', mobileNavClick);

$('.mobileA').on('click', mobileNavClick );

function mobileNavClick() {
    if ($('.navMobile').hasClass('clicked')) {
        $('.menuMobileIcon').removeClass('iconClicked');
        $('.navMobile').removeClass('clicked');
    } else {
        $('.navMobile').addClass('clicked');
        $('.menuMobileIcon').addClass('iconClicked');
    }
}

$(window).resize(rezise);
$(window).ready(rezise);

function rezise() {
    let width = $('.portfolioImg').width();
    let elem = document.getElementsByClassName('portfolioImg');
    for (let item of elem) {
        item.style.height = width + 'px';
    }
}