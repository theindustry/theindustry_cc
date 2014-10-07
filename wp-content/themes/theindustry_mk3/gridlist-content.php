<?php
$offset = empty( $_POST['offset'] ) ? 0 : sanitize_text_field( $_POST['offset'] );
$options = array(
	'numberposts' => 9,
	'offset' => $offset
);

if( is_single() ) { $options['exclude'] = get_the_id(); }
if( is_search() ) { $options['s'] = get_query_var( 's' ); }
if( is_category() ) { $options['category'] = get_query_var( 'cat' ); }
if( is_author() ) { $options['author'] = get_query_var( 'author' ); }

if( isset( $_POST['options'] ) ) {
	$query_options = json_decode( stripslashes( $_POST['options'] ) );

	foreach( $query_options as $key => $value ) {
		$options[ sanitize_text_field( $key ) ] = sanitize_text_field( $value );
	}
}

$posts = get_posts($options);

foreach( $posts as $i => $post ) {
	setup_postdata( $post );

	if( get_field('alt_title') ) {
		$title = get_field('alt_title');
	} else { $title = get_the_title(); }

	if( $i == count($posts) - 2 ) { echo '<div class="gridlist-expander">'; }

	$size = 'gridlist-thumb-';
	if( $i == 1 ) { $size .= '2by1'; }
	elseif( $i == 5 ) { $size .= '3by1'; }
	elseif( $i == 6 ) { $size .= '2by2'; }
	else { $size .= '1by1'; }
	?>
<a href="<?php the_permalink(); ?>" class="gridlist-article">
		<div style="background-image: url(<?php echo get_post_image_url($post, $size); ?>)" class="gridlist-article-image gridlist-article-image-nonretina"></div>
		<div style="background-image: url(<?php echo get_post_image_url($post, $size . '-retina'); ?>)" class="gridlist-article-image gridlist-article-image-retina"></div>
		<div class="gridlist-article-inner">
			<div class="gridlist-article-meta article-meta">
				<span class="gridlist-article-meta-date meta-date"><?php echo get_the_date(); ?></span>
				<span class="gridlist-article-meta-category meta-category <?php echo $post->category['class']; ?>"><?php echo $post->category['name']; ?></span>
			</div>
			<h1 class="gridlist-article-title"><?php echo $title; ?></h1>
			<div class="gridlist-article-author">
				<span class="gridlist-article-author-name"><?php the_author(); ?></span>
				<span class="gridlist-article-author-role"><?php echo get_the_author_role(); ?></span>
			</div>
		</div>
	</a>
	<?php
	if( $i == count($posts) - 1 ) { echo '</div>'; }
}
?>
