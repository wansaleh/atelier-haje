<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

// END ENQUEUE PARENT ACTION

$asset_version = '1.0.0';

function haje_widget_title($title) {
  if ( is_admin() ) return $title;

  return do_shortcode(htmlspecialchars_decode($title));
}
add_filter('widget_title',  'haje_widget_title');

function haje_sale_saving_badge($string, $post, $product) {
  $percent = round(100 - (100 * $product->get_sale_price() / $product->get_regular_price()));
  return '<span class="onsale">Save ' . $percent . '%</span>';
}
add_filter('woocommerce_sale_flash', 'haje_sale_saving_badge', 10, 3);

function haje_hi_text( $atts, $content = null ) {
  return '<span class="hi">' . $content . '</span>';
}
add_shortcode( 'hi', 'haje_hi_text' );

function haje_uri($relative_uri = "") {
  return get_stylesheet_directory_uri() . $relative_uri;
}

function haje_scripts() {
  global $asset_version;

  if ( is_admin() ) return;

  // // select2
  // if ( !is_checkout() ) {
  //   wp_enqueue_style('haje-select2', haje_uri() . '/bower_components/select2/dist/css/select2.min.css');
  //   wp_enqueue_script('haje-select2', haje_uri() . '/bower_components/select2/dist/js/select2.min.js', array(), $asset_version, true);
  // }

  // main cdnaysid's js
  wp_enqueue_script('haje', haje_uri() . '/js/haje.js', array(), $asset_version, true);
  wp_enqueue_script('haje');
}
// add_action('wp_enqueue_scripts', 'haje_scripts', 9999);
