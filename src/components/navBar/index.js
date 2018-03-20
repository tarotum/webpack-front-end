import jquery from "jquery";
import css from "./style.scss";
import magnificPopup from "Static/magnific-popup/jquery.magnific-popup.js";
export default (function navBar() {
  const list = jquery(".list__item");

  list.each((index, item) => {
    console.log(`${index}:${item.innerHTML}`);
  });

  if (list.length > 0) {
    jquery(document).ready(function() {
      jquery(".image-popup-vertical-fit").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-img-mobile",
        image: {
          verticalFit: true
        }
      });
    });
  }
})();
