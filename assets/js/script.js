window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "0px"
    document.getElementById("header").style.backgroundColor = "#000000"
  } else {
    document.getElementById("header").style.padding = "10px 0px"
    document.getElementById("header").style.backgroundColor = "transparent"
  }
}

$('.slider-image').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    autoplay: false
})

$('.grid').masonry({
  // options
  itemSelector: '.grid-item-1',
  columnWidth: col-sm-6
});

$(".portfolio-list").isotope({
  
});