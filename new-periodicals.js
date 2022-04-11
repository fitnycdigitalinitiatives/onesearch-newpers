$(document).ready(function() {
  $.get("https://lgapi-us.libapps.com/widgets.php?site_id=942&widget_type=8&output_format=1&widget_embed_type=2&guide_id=66305&box_id=2748549&map_id=3236810&content_only=0&include_jquery=0&config_id=1649688369020", function(data) {
    var wrapper = $('<div></div>').html(data);
    if ($(wrapper).find('#s-lib-cpane-3236810 > div').length) {
      var divs = $(wrapper).find('#s-lib-cpane-3236810 > div');
      var slides = [];
      $(divs).each(function(index) {
        var url = $(this).children('a').attr("href");
        var cover = $(this).children('a').children('img').attr("src");
        var title = $(this).children('.s-lib-cpane-caption').text();
        if (cover != "") {
          var slide = `
          <a class="card" target="_top" href="` + url + `" title="` + title + `">
            <img src="` + cover + `" alt="` + title + `" class="card-img">
          </a>
          `
        }
        slides.push(slide);
      });
      $(".owl-carousel").append(slides);
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 30,
        loop: false,
        autoWidth: true,
        items: 10,
        nav: false,
        dots: false,
        responsive: {
          0: {
            slideBy: 1
          },
          420: {
            slideBy: 2
          },
          570: {
            slideBy: 3
          },
          725: {
            slideBy: 4
          },
          880: {
            slideBy: 5
          },
          1035: {
            slideBy: 6
          },
          1190: {
            slideBy: 7
          },
          1345: {
            slideBy: 8
          },
          1500: {
            slideBy: 9
          },
        }
      });
      owl.on('changed.owl.carousel', function(event) {
        var minimum = event.relatedTarget.minimum(),
          maximum = event.relatedTarget.maximum(),
          current = event.relatedTarget.current();
        if (current <= minimum) {
          $('#previous').prop('disabled', true);
        } else {
          $('#previous').prop('disabled', false);
        }
        if (current >= maximum) {
          $('#next').prop('disabled', true);
        } else {
          $('#next').prop('disabled', false);
        }
      });
      // Go to the next item
      $('#next').click(function() {
        owl.trigger('next.owl.carousel');
      });
      // Go to the previous item
      $('#previous').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
      });
    }
  });
});