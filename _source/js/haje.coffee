# @codekit-prepend "../../bower_components/sticky-kit/jquery.sticky-kit.js"

$ = jQuery

$ ->
  $(".woocommerce-shop-page aside.sidebar").stick_in_parent(
    offset_top: 80
  );
