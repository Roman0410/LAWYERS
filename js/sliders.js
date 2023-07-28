$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
$(".partner-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".partners .slider").find(".prev"),
  nextArrow: $(".partners .slider").find(".next"),
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".reviews-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: $(".reviews .slider").find(".prev"),
  nextArrow: $(".reviews .slider").find(".next"),
});
