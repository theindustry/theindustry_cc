<?php
$featured = array();
while( have_rows('featured_posts', 'options') ) {
	the_row();
	$featured[] = get_sub_field('post');
}
?>

<div class="hero-images fxArchive">
	<ul class="hero-images-wrapper">
	
		<!--
		What follows is a hackish solution to a convoluted problem.
		TO DO: Refactor to use srcset and ditch <style> in the body
		-->
		
		<?php
		foreach( $featured as $i => $id ) {
			if( $i == 0 ) { $current = ' current'; }
			else { $current = ''; }
			?>
<style>#hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'featured-small'); ?>); }@media (min-width: 480px) { #hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'featured-medium'); ?>); } }@media (min-width: 1024px) { #hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'featured-large'); ?>); } }@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { #hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'featured-small-retina'); ?>); } }@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 480px), (min-resolution: 192dpi) and (min-width: 480px) { #hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'featured-medium-retina'); ?>); } }@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px), (min-resolution: 192dpi) and (min-width: 1024px) { #hero-image-<?php echo $i; ?> { background-image: url(<?php echo get_post_image_url(get_post($id), 'fullsize'); ?>); } }</style>
			<li class="hero-image-item<?php echo $current; ?>"><div class="hero-image" id="hero-image-<?php echo $i; ?>"></div></li>

			<?php
		}
?></ul>

	<?php if( count($featured) > 1 ) : ?>
<div class="hero-image-navigation">
		<button id="hero-image-prev">Previous</button>
		<button id="hero-image-next">Next</button>
	</div>
	<?php endif; ?>

</div>

<header id="hero">
	<div class="hero-items">
		<?php
		foreach( $featured as $id ) {
			$category = get_the_category( $id );
			$category = end( $category );
			$category_name = $category->cat_name;
			if( $category_name != 'News' ) { $category_name = trim($category_name, 's'); }
			?>
			<div class="hero-item">
				<div class="hero-info">
					<div class="hero-meta article-meta">
						<span class="hero-meta-category meta-category <?php echo 'cat-' . $category->slug; ?>">Featured <?php echo $category_name; ?></span>
						<span class="hero-meta-date meta-date"><?php echo get_the_date( '', $id ); ?></span>
					</div>
					<h1 class="hero-title"><a href="<?php echo get_permalink( $id ); ?>"><?php echo get_the_title( $id ); ?></a></h1>
				</div>
			</div>
			<?php
		}
		?>
	</div>

	<div class="hero-navigation">
		<?php if( count($featured) > 1 ) : ?>
		<div class="hero-navigation-buttons">
			<button id="hero-prev">Previous</button>
			<button id="hero-next">Next</button>
		</div>
		<?php endif; ?>
	</div>

</header>
