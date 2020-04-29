// Auto HOver

$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// Filter Category

$("#app-flters li").click(function() {
    $("#app-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#app-wrapper").fadeTo(100, 0);

    $(".app-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function() {
        $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
        $("#app-wrapper").fadeTo(300, 1);
    }, 300);
});

// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get filteritems dimensions
var filteritemsLength = $('.filteritem').length;
var filteritemSize = $('.filteritem').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
    return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
    menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu filteritems
var getMenuSize = function() {
    return filteritemsLength * filteritemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
    return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    var menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {
        $(leftPaddle).addClass('hidden');
        $(rightPaddle).removeClass('hidden');
    } else if (menuPosition < menuEndOffset) {
        // show both paddles in the middle
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).removeClass('hidden');
    } else if (menuPosition >= menuEndOffset) {
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).addClass('hidden');
    }

    // print important values
    $('#print-wrapper-size span').text(menuWrapperSize);
    $('#print-menu-size span').text(menuSize);
    $('#print-menu-invisible-size span').text(menuInvisibleSize);
    $('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function() {
    $('.menu').animate({
        scrollLeft: menuInvisibleSize
    }, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
    $('.menu').animate({
        scrollLeft: '0'
    }, scrollDuration);
});

// Owl owlCarousel

$(document).ready(function() {
    var owl = $("#slider-carousel");
    owl.owlCarousel({
        items: 1,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        pagination: true,
        loop: true,
        autoPlay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false
    });
    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })
});

// fancybox
$(document).ready(function() {
    $(".fancybox").fancybox({
        'showNavArrows': true
    });
});

// Auto scroll up

$(function() {
    var tickerLength = $('.announcement ul li').length;
    var tickerHeight = $('.announcement ul li').outerHeight();
    $('.announcement ul li:last-child').prependTo('.announcement ul');
    $('.announcement ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.announcement ul').animate({
            top: -tickerHeight
        }, 600, function() {
            $('.announcement ul li:first-child').appendTo('.announcement ul');
            $('.announcement ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 3000);
});

$(function() {
    var tickerLength = $('.useful-links ul li').length;
    var tickerHeight = $('.useful-links ul li').outerHeight();
    $('.useful-links ul li:last-child').prependTo('.useful-links ul');
    $('.useful-links ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.useful-links ul').animate({
            top: -tickerHeight
        }, 600, function() {
            $('.useful-links ul li:first-child').appendTo('.useful-links ul');
            $('.useful-links ul').css('top', '');
        });
    }
    setInterval(function() {
        moveTop();
    }, 3000);
});