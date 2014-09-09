<?php
/*
add_action( 'init', function() {
	$posts = get_posts(array(
		'post_type' => 'post',
		'numberposts' => -1
	));
	foreach( $posts as $post ) {
		if( $post->ID < 16181 ) {
			delete_post_thumbnail( $post->ID );
		}
	}
});
*/

/*
add_action('init', function() {

	$posts = get_posts(array(
		'post_type' => 'post',
		'numberposts' => -1
	));

	foreach( $posts as $post ) {
		if( $post->ID < 16181 ) {
			$media = get_attached_media( 'image', $post->ID );
			unset( $final );
			$w = 0;
			$h = 0;
			$largestw = 0;
			$largesth = 0;

			echo '<b>POST ID '.$post->ID.'</b><br />';
			foreach( $media as $media_id => $med ) {
				$meta = wp_get_attachment_metadata( $media_id );
				$w = $meta['width'];
				$h = $meta['height'];

//				echo '<a href="'.wp_get_attachment_url( $media_id ).'">'.$media_id.'</a> - ';
//				echo $w . ' x ' . $h;
//				echo '<br />';

				if( $w >= 640 && $h >= 240 ) {
					if( $w == $largestw ) {
						if( $h > $largesth ) {
							$final = $media_id;
							$largestw = $w;
							$largesth = $h;
						}
					} elseif( $w > $largestw ) {
						$final = $media_id;
						$largestw = $w;
						$largesth = $h;
					}
				}

			}
			if( isset( $final ) ) {
//				echo 'The best option is <a href="'.wp_get_attachment_url( $final ).'">'.$final.'</a>';
				set_post_thumbnail( $post->ID, $final );
			}
			echo '<hr />';
		}
	}

});
*/