import "./slider.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";

export default (() => {
  $(document).ready(function() {
    $(".owl-carousel.slider__carousel").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  });
})();
