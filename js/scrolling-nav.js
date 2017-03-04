$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    $( ".texthover" ).mouseover(function() {
      var hoverTitle = $(this).attr("data-parentimg")
      $("#sec1").css({
        "background-image" : "url("+hoverTitle+")",
      });
    });
    $( ".texthover" ).mouseleave(function() {
      $("#sec1").css({
        "background-image" : "url(img/default.png)"
      });
    });
});
