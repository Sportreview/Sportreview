<?php
/*  ----------------------------------------------------------------------------
    Newspaper V6.3+ Child theme - Please do not use this child theme with older versions of Newspaper Theme

    What can be overwritten via the child theme:
     - everything from /parts folder
     - all the loops (loop.php loop-single-1.php) etc
	 - please read the child theme documentation: http://forum.tagdiv.com/the-child-theme-support-tutorial/


     - the rest of the theme has to be modified via the theme api:
       http://forum.tagdiv.com/the-theme-api/

 */



/*  ----------------------------------------------------------------------------
    add the parent style + style.css from this folder
 */
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', 1001);
function theme_enqueue_styles() {
    wp_enqueue_style('td-theme', get_template_directory_uri() . '/style.css', '', TD_THEME_VERSION, 'all' );
    wp_enqueue_style('td-theme-child', get_stylesheet_directory_uri() . '/style.css', array('td-theme'), TD_THEME_VERSION . 'c', 'all' );

}


// Add button for video player shortcode
add_action('init', 'add_button');
function add_button() {
  if ( current_user_can('edit_posts') &&  current_user_can('edit_pages') )
  {
    add_filter('mce_external_plugins', 'add_plugin');
    add_filter('mce_buttons', 'register_button');
  }
}

function register_button($buttons) {
  array_push($buttons, "video_sr");
  return $buttons;
}

function add_plugin($plugin_array) {
  $plugin_array['video_sr'] = get_stylesheet_directory_uri().'/js/customcodes.js';
  return $plugin_array;
}


//Funzione recupero immagine Video Vimeo by Riccardo Mel
function GetThumbCurl($vurl){
//Funzione di recupero diretto delle locandine recuperate da VIMEO
    $video_elab_cover = explode("/",$vurl);
    $video_id_cover = explode(".",$video_elab_cover[4]);
    $vid = $video_id_cover[0];
    $request = "https://vimeo.com/api/oembed.json?url=http%3A%2F%2Fvimeo.com%2F".$vid."";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $request);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $a = curl_exec($ch);
    $result = json_decode($a, true);
    return $result['thumbnail_url'];
}//Funzione recupero immagine Video Vimeo by Riccardo Mel



//Custom feed all da inserire nel tema parente - sovrascrive engine feed con questo template
remove_all_actions( 'do_feed_rss2' );
add_action( 'do_feed_rss2', 'trg_product_feed_rss', 10, 1 );
function trg_product_feed_rss(  ) {
    $rss_template = get_template_directory() . '/feed-custom.php';
    load_template( $rss_template );
}
//Custom feed all da inserire nel tema parente - sovrascrive engine feed con questo template


// Video JS Engine | ARTICOLO
/*wp_enqueue_script( 'video_sr_js', get_stylesheet_directory_uri().'/js/video_sr.js' );
function video_sr($atts, $content = null) {
  extract(shortcode_atts(array(
    "url" => "",
    "autoplay" => "true",
    "width" => "100%",
    "height" => "300",
    "mute" => "false",
    "repeat" => "false"
  ), $atts));


  //Poster Video
  $cover_img = GetThumbCurl($url);

  preg_match('~external/(.*?).m3u8~', $url, $videoid); // Recupero ID Video
  $playerdiv = '<div id="Ajax_VideoHolder" class="playerHolder"><div id="rmpPlayer-'.$videoid[1].'"></div></div>';
  $playerdiv .= '<script>VideoSportReview("'.$url.'","'.$autoplay.'","'.$width.'","'.$height.'","'.$mute.'","'.$repeat.'","'.$videoid[1].'","'.$cover_img.'");</script>';
  return $playerdiv;


}
add_shortcode("video_sr", "video_sr");
// END Video JS Engine | ARTICOLO
*/