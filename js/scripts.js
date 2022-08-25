$(document).ready(function () {

    $( function() {
        $( "#accordion" ).accordion();
    } );

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },
            375: {items: 1},
            428: {items: 2},
            768: {items: 3},
            820: {items: 3},

            992: {items: 4},
            1200: {
                items: 5
            }
        }
    });
});