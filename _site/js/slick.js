$(document).ready(function() {
  $('#carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $('#team-carousel').slick({
    rows: 2,
    slidesPerRow: 4,
    centerPadding: '60px',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
