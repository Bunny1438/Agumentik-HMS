$(document).ready(function () {
    //Skype
    Skype.ui({
        "name": "dropdown",
        "element": "SkypeButton_Call_bdtask_1",
        "participants": ["bdtask"],
        "imageColor": "white",
        "imageSize": 14
    });
    
    $(".testimonial_slider").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 4000,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(".product_slider").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 4000,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('body').append('<div id="toTop" class="btn btn-top">The <i class="ti-arrow-up"></i> Top</div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    });
    
    $('#toTop').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    
    var scrollLink = $('.scroll');

      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });

      // Active link switching
      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 20;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })

      });
    
    $('.nav-tabs > li ').hover(function() {
      if ($(this).hasClass('active'))
        return;
      else
        $(this).find('a').tab('show');
    });
});