// $(window).on("load", function() {
//     $('#preloader').delay(10).effect("puff", 100);
// });




$(document).ready(function() {

    $('.navbuttons').click(function() {
        $(this).toggleClass('crossxs');
    });

    // $('.navbuttons').click(function() {
    //     $(this).addClass('uppernavs').css({ opactiy: 1 });
    // });

    $('.menuitems').click(function() {
        $('.uppernavs').hide();
    });

    //for aboutus section
    $(window).scroll(function() {
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);
        if (getscroll >= 150) {
            $('.divlefts').addClass('fromlefts');
            $('.divrights').addClass('fromrights');
        } else {
            $('.divlefts').removeClass('fromlefts');
            $('.divrights').removeClass('fromrights');
        }

        if (getscroll >= 1000) {
            $('.memberparas').addClass('membertitlestop');
            $('.memberparas').addClass('membertitlebottom');

        } else {
            $('.memberparas').removeClass('membertitlestop');
            $('.memberparas').removeClass('membertitlebottom');
        }
    });

    //For members slide
    $('.owl-carousel').owlCarousel({
        ltr: true,
        loop: true,
        responsiveClass: true,
        margin: 100,
        stagePadding: 50,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        animateOut: 'easeIn',
        animateIn: 'easeOut',

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Concert Ticket Section
        $("#choosedate").datepicker({
            dateFormat: "dd-MM-yy",
            showAnim: "slide"
        });

        
        var getconcerttext = document.getElementById('concerttext');
        const concerttext = `We are still operating a click an collect service. Speak to one of our  jewellery specialists  today for more information or book a virtual consultation below, As Soon As Possible.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `;
    
    
        let secondscroll = $(this).scrollTop();
        console.log(secondscroll);

                let i = 0,
                j = concerttext.length;
        
            function start() {
                getconcerttext.innerHTML += concerttext[i];
                i++;
                stop(i, j);
            }

            function stop(startpoint, endpoint) {
                if (startpoint == endpoint) {
                    clearInterval(stoptext);
                }
            }
        
            let stoptext = setInterval(start, 50);

   
    //  end ticket section


    //start gallary section

    $('.bts,.txt,.enhypen,.bighit').hide();

    $('.gallarylists').on("click", function() {

        // for change class style
        $(this).addClass('activegallarys,hoveractives').siblings().removeClass('activegallarys,hoveractives');

        //for filter
        let getattri = $(this).attr('data-filter');
        //  console.log(getattri);


        if (getattri === "worldtour") {

            $('.worldtour').show('slide', 500);
            $('.bts,.txt,.enhypen,.bighit').hide();
        } else {

            $('.filters').hide(500);

            $('.filters').not('.' + getattri).hide(500);

            $('.filters').filter('.' + getattri).show('slide', 500);
        }
    });

    lightbox.option({

    });




});