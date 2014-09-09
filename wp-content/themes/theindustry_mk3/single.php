<?php get_header(); ?>

<?php
if( have_posts() ) {
	while( have_posts() ) {
		the_post();
		?>
		<style>
			#hero-single { background-image: url(<?php echo get_post_image_url($post, 'featured-small'); ?>); }
			@media (min-width: 480px) { #hero-single { background-image: url(<?php echo get_post_image_url($post, 'featured-medium'); ?>); } }
			@media (min-width: 1024px) { #hero-single { background-image: url(<?php echo get_post_image_url($post, 'featured-large'); ?>); } }
			@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { #hero-single { background-image: url(<?php echo get_post_image_url($post, 'featured-small-retina'); ?>); } }
			@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 480px), (min-resolution: 192dpi) and (min-width: 480px) { #hero-single { background-image: url(<?php echo get_post_image_url($post, 'featured-medium-retina'); ?>); } }
			@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px), (min-resolution: 192dpi) and (min-width: 1024px) { #hero-single { background-image: url(<?php echo get_post_image_url($post, 'fullsize'); ?>); } }
		</style>
		<div id="hero-single"></div>
		<article class="container container-single">

			<header id="single-header">
			<h1 class="single-title"><?php the_title(); ?></h1>

				<div class="article-meta single-article-meta">
					<div class="article-meta single-meta">
						<!--
						<a href="<?php echo $post->category['permalink']; ?>" class="single-meta-category meta-category <?php echo $post->category['class']; ?>"><?php echo $post->category['name']; ?></a>
						-->
						<span class="single-meta-date meta-date"><?php the_date(); ?></span>
					</div>
				</div>

				<div class="article-author single-article-author">
					<a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" class="article-author-name"><?php the_author(); ?></a>
					<span class="article-author-role"><?php echo get_the_author_role(); ?></span>
					<ul class="author-links">
						<?php if( get_the_author_meta('user_url') ) : ?><li><a href="<?php echo get_the_author_meta( 'user_url' ); ?>" class="author-site"><?php echo get_the_author_meta( 'user_url' ); ?></a></li><?php endif; ?>
						<?php if( get_the_author_meta('twitter') ) : ?><li><a href="https://twitter.com/<?php echo get_the_author_meta( 'twitter' ); ?>" class="author-twitter">@<?php echo get_the_author_meta( 'twitter' ); ?></a></li><?php endif; ?>
						<?php if( get_the_author_meta('dribbble') ) : ?><li><a href="<?php echo get_the_author_meta( 'dribbble' ); ?>" class="author-dribbble"><?php the_author(); ?> on Dribbble</a></li><?php endif; ?>
					</ul>
				</div>
			</header>

			<div id="content" class="inner">
				<?php the_content(); ?>
			</div>

			<footer id="comments"><?php comments_template(); ?></footer>
		</article>
		<?php
	}
} else {
	
}
?>

<?php
/*
if( get_previous_post_link() || get_next_post_link() ) {
	?>
	<div class="post-nav">
		<span class="post-nav-prev"><?php previous_post_link('%link', '%title'); ?></span>
		<span class="post-nav-next"><?php next_post_link('%link', '%title'); ?></span>
	</div>
	<?php
}
*/
?>

<?php get_template_part( 'gridlist' ); ?>

<?php get_footer(); ?>