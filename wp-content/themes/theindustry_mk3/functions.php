<?php
// Store frequently-used values as global variables to avoid excess db requests
	$GLOBALS['site_url'] = get_site_url();
	$GLOBALS['template_url'] = get_template_directory_uri();


// Add THEME SUPPORT for additional functionality
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'post-thumbnails' );


// Add new IMAGE SIZES
	add_image_size( 'gridlist-thumb-1by1', 336, 336, true );
	add_image_size( 'gridlist-thumb-1by1-retina', 672, 672, true );
	add_image_size( 'gridlist-thumb-2by1', 672, 336, true );
	add_image_size( 'gridlist-thumb-2by1-retina', 1344, 672, true );
	add_image_size( 'gridlist-thumb-2by2', 672, 672, true );
	add_image_size( 'gridlist-thumb-2by2-retina', 1344, 1344, true );
	add_image_size( 'gridlist-thumb-3by1', 950, 336, true );
	add_image_size( 'gridlist-thumb-3by1-retina', 1900, 672, true );

	add_image_size( 'featured-small', 480);
	add_image_size( 'featured-medium', 1024);
	add_image_size( 'featured-large', 1440);

	add_image_size( 'featured-small-retina', 960);
	add_image_size( 'featured-medium-retina', 2048);


// Hide the GENERATOR VERSION for extra security
	add_filter( 'the_generator', function() { return false; });


// Load admin functions
	foreach( glob(TEMPLATEPATH . '/admin/*.php') as $filename ) {
		require_once $filename;
	}


// Add additional user profile fields
	add_filter( 'user_contactmethods', function() {
		$profile_fields['twitter'] = 'Twitter Username';
		$profile_fields['dribbble'] = 'Dribbble Link';
		$profile_fields['ti_role'] = 'Industry Role';

		return $profile_fields;
	});


// Remove dimensions from WP-generated images
	add_filter('post_thumbnail_html', 'ti_image_prep');
	add_filter('the_content', 'ti_image_prep', 99);
	function ti_image_prep($output) {
		$pattern = "/width=\"[0-9]*\"/"; 
		$output = preg_replace($pattern, "", $output);
		$pattern = "/height=\"[0-9]*\"/"; 
		$output = preg_replace($pattern, "", $output);
	    return $output;
}


// Get the author role
	function get_the_author_role() {
		$role = (get_the_author_meta( 'ti_role' )) ? get_the_author_meta( 'ti_role' ) : 'Staff Writer';
		return $role;
	}


// Change settings for DEBUG MODE
	if( WP_DEBUG == true ) { add_action( 'wp_head', 'livereload' ); }
	function livereload() {
		?>
		<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
		<?php
	}


// Handle the SCRIPTS AND STYLES
	add_action( 'wp_enqueue_scripts', 'ti_scripts', 100);
	function ti_scripts() {
		wp_deregister_script( 'jquery' );
		wp_dequeue_script( 'jquery' );

		$options = '';
		if( is_single() ) { $options['exclude'] = get_the_id(); }
		if( is_search() ) { $options['s'] = get_query_var( 's' ); }
		if( is_category() ) { $options['category'] = get_query_var( 'cat' ); }
		if( is_author() ) { $options['author'] = get_query_var( 'author' ); }

		wp_enqueue_script( 'app', $GLOBALS['template_url'] . '/assets/js/app.min.js', false, false, true );

		if( is_single() ) {
			$url = get_permalink();
			$fb_url = $url;
		} else {
			$url = 'http://theindustry.cc';
			$fb_url = 'https://www.facebook.com/theindustry.cc';
		}

		wp_localize_script( 'app', 'ajax', array(
			'url' => $url,
			'fb_url' => $fb_url,
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'nonce-special-string' ),
			'query_options' => json_encode( $options )
		) );
	}


// Modify the POST OBJECT to include categories
	add_action( 'the_post', 'ti_post_categories' );
	function ti_post_categories( $post_object ) {
		$category = get_the_category();
		$category = end( $category );

		$post_object->category = array(
			'name' => $category->cat_name,
			'permalink' => get_category_link( $category->term_id ),
			'class' => 'cat-' . $category->slug
		);
		return $post_object;
	}


// Get the post's FEATURED IMAGE.
// If it doesn't exist, make the first image the featured image.
// No images at all? Switch to default.
	function get_post_image_url( $post, $size ) {
		$cdn = 'http://d24njcbunk2gp2.cloudfront.net';

		$image = get_post_thumbnail_id( $post->ID );
		$image = wp_get_attachment_image_src( $image, $size );
		$image = $image[0];

		$image = str_replace($GLOBALS['site_url'], $cdn, $image);
		$image = str_replace('http://http://', 'http://', $image);

		if( ! $image ) {
			$image = $GLOBALS['template_url'] . '/assets/img/default.jpg';
		}

		return $image;
	}


// Handle the BREADCRUMBS
	function ti_breadcrumbs() {
		echo '<ul class="header-breadcrumbs">';

		if( is_single() ) {
			global $post;

			if( get_field('subject') ) {
				$title = get_field('subject');
				if( get_field('subtitle') ) {
					$title .= ' - ' . get_field('subtitle');
				}
			}
			elseif( get_field('alt_title') ) {
				$title = get_field('alt_title');
			}
			else {
				$title = get_the_title();
			}

			echo '<li class="header-breadcrumbs-item"><a href="'.$post->category['permalink'].'">'.$post->category['name'].'</a></li>';
			echo '<li class="header-breadcrumbs-item">'.$title.'</li>';
		}

		if( is_category() ) {
			echo '<li class="header-breadcrumbs-item">'.single_cat_title( '', false ).'</li>';
		}

		if( is_front_page() ) {
			echo '<li class="header-breadcrumbs-item">All Articles</li>';
		}

		if( is_search() ) {
			echo '<li class="header-breadcrumbs-item">Search for &ldquo;'.get_query_var('s').'&rdquo;</li>';
		}

		if( is_404() ) {
			echo '<li class="header-breadcrumbs-item">404</li>';
		}

		if( is_author() ) {
			$name = get_queried_object();
			$name = $name->display_name;
			echo '<li class="header-breadcrumbs-item">Posts by '.$name.'</li>';
		}

		echo '</ul>';
	}


// Handle the GRIDLIST AJAX
	add_action( 'wp_ajax_gridlist', 'ti_ajax_gridlist' );
	add_action( 'wp_ajax_nopriv_gridlist', 'ti_ajax_gridlist' );
	function ti_ajax_gridlist() {
		check_ajax_referer( 'nonce-special-string', 'nonce' );
		get_template_part( 'gridlist', 'content' );
		die();
	}


// Filter the CONTENT
	add_filter( 'the_content', function( $content ) {
		$content = preg_replace(array('{<a(.*?)[^>]*><img}', '{ wp-image-[0-9]*" /></a>}'), array('<img','" />'), $content );
		$content = preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
		$content = str_replace( '<p></p>', '', $content );
		return $content;
	});


// Generate the TWITTER LINK
	function get_twitter_link() {
		if( is_single() ) {
			$link = get_permalink();
			$shortlink = get_bitly_link();
			$title = get_the_title();
		} else {
			$link = $GLOBALS['site_url'];
			$shortlink = $GLOBALS['site_url'];
			$title = 'The Industry';
		}

		$link = urlencode($link);
		$shortlink = urlencode($shortlink);

		$result = 'https://twitter.com/share';
		$result .= '?url='.$shortlink;
		$result .= '&text='.$title;
		$result .= '&via=industry';
		$result .= '&related=industry';
		if( is_single() && get_the_author_meta( 'twitter' ) ) {
			$result .= ','.get_the_author_meta( 'twitter' );
		}
		$result .= '&counturl='.$link;
		$result .= '&count=horizontal';

		return $result;
	}

	function get_facebook_link() {
		if( is_single() ) {
			$link = get_permalink();
			$link = urlencode( $link );
			$result = 'http://www.facebook.com/plugins/like.php?href=' . $link . '&action=like';

		} else {
			$link = urlencode( 'https://www.facebook.com/theindustry.cc' );
			$result = 'http://www.facebook.com/plugins/like.php?href=' . $link . '&action=like';
		}

		return $result;
	}

	function get_bitly_link() { return get_permalink(); }


// Get TWITTER COUNT
	add_action( 'wp_ajax_socialcount', 'get_social_count' );
	add_action( 'wp_ajax_nopriv_socialcount', 'get_social_count' );
	function get_social_count() {
		check_ajax_referer( 'nonce-special-string', 'nonce' );
		$url = sanitize_text_field( $_POST['url'] );
		echo json_encode(array(
			'twitter' => get_twitter_count( $url ),
			'facebook' => get_facebook_count( $url )
		));
		die();
	}

	function get_twitter_count( $link ) {
		if( ! is_single() ) {
			$link = $GLOBALS['site_url'];
		}

		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_HTTPGET => true,
	        CURLOPT_URL => 'http://cdn.api.twitter.com/1/urls/count.json?url='.$link,
        	CURLOPT_TIMEOUT => 5,
	        CURLOPT_HEADER => false,
	        CURLOPT_RETURNTRANSFER => true,
	        CURLOPT_SSL_VERIFYPEER => false,
	        CURLOPT_FOLLOWLOCATION => true
		));
		$raw = curl_exec($curl);
		curl_close( $curl );

		$raw = json_decode( $raw );
		if( isset( $raw->count ) ) {
			return $raw->count;
		} else { return false; }
	}

	function get_facebook_count( $link ) {
		if( ! is_single() ) {
			$link = 'https://www.facebook.com/theindustry.cc';
		}

		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_HTTPGET => true,
	        CURLOPT_URL => 'https://graph.facebook.com/fql?q=' . urlencode('SELECT like_count, total_count, share_count, click_count, comment_count FROM link_stat WHERE url = "'.$link.'"'),
        	CURLOPT_TIMEOUT => 5,
	        CURLOPT_HEADER => false,
	        CURLOPT_RETURNTRANSFER => true,
	        CURLOPT_SSL_VERIFYPEER => false,
	        CURLOPT_FOLLOWLOCATION => true
		));
		$raw = curl_exec($curl);
		curl_close( $curl );

		$raw = json_decode( $raw );
		if( isset( $raw->data[0]->total_count ) ) {
			return $raw->data[0]->total_count;
		} else { return false; }
	}


	function create_twitter_link() {
		if( is_single() ) {
			$link = get_permalink();
			$shortlink = get_bitly_link();
			$title = get_the_title();

			$related = 'industry';
			if( is_single() && get_the_author_meta( 'twitter' ) ) {
				$related .= ','.get_the_author_meta( 'twitter' );
			}

			echo '<a href="https://twitter.com/share" class="twitter-share-button" data-text="'.$title.'" data-via="industry" data-related="'.$related.'" data-counturl="'.$link.'" data-url="'.$shortlink.'">Tweet</a>';
		} else {
			echo '<a href="https://twitter.com/industry" class="twitter-follow-button" data-show-count="true">@industry</a>';
		}
	}

	function create_facebook_link() {
		if( is_single() ) {
			echo '<div class="fb-share-button" data-layout="button_count"></div>';
		} else {
			echo '<div class="fb-like" data-href="https://www.facebook.com/theindustry.cc" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>';
		}
	}