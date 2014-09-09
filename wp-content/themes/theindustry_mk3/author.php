<?php get_header(); ?>

	<section class="container inner">
		<header class="author-header">
			<img src="<?php echo 'http://www.gravatar.com/avatar/' . md5( strtolower( get_the_author_meta( 'user_email' ) ) ); ?>?s=400" alt="<?php the_author(); ?>" class="author-author-avatar">
			<h2 class="author-author-name"><?php the_author(); ?></h2>
			<span class="author-author-role"><?php echo get_the_author_role(); ?></span>
		</header>

		<p class="author-author-description"><?php echo get_the_author_meta( 'description' ); ?></p>
		<p class="author-author-description">
		<?php
		$articles = '';
		$posts = get_posts(array(
			'author' => get_the_author_meta( 'ID' ),
			'numberposts' => -1
		));
		if( count($posts) > 1 ) { $end_s = 's'; }
		else { $end_s = ''; }
		echo get_the_author_meta( 'user_firstname' ) . ' has written ' . count($posts) . ' article'.$end_s.'.';
		?>
		</p>

		<ul class="author-links author-author-links">
			<?php if( get_the_author_meta('user_url') ) : ?><li><a href="<?php echo get_the_author_meta( 'user_url' ); ?>" class="author-site"><?php echo get_the_author_meta( 'user_url' ); ?></a></li><?php endif; ?>
			<?php if( get_the_author_meta('twitter') ) : ?><li><a href="https://twitter.com/<?php echo get_the_author_meta( 'twitter' ); ?>" class="author-twitter">@<?php echo get_the_author_meta( 'twitter' ); ?></a></li><?php endif; ?>
			<?php if( get_the_author_meta('dribbble') ) : ?><li><a href="<?php echo get_the_author_meta( 'dribbble' ); ?>" class="author-dribbble"><?php the_author(); ?> on Dribbble</a></li><?php endif; ?>
		</ul>
	</section>

	<?php get_template_part( 'gridlist' ); ?>

<?php get_footer(); ?>