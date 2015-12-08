<?php get_header(); ?>

<?php get_template_part( 'hero' ); ?>

	<div class="container">
		<div id="main" class="inner">

			<?php
			$posts = get_posts(array(
				'numberposts' => 1
			));
			$category = wp_get_post_categories( $posts[0]->ID );
			$category = get_category( $category[0] );
			$category_order = array();
			switch( $category->slug ) {
				case 'news':
					$category_order = array('news', 'reviews', 'opinions', 'interviews');
					break;
				case 'opinions':
					$category_order = array('opinions', 'interviews', 'news', 'reviews');
					break;
				case 'reviews':
					$category_order = array('reviews', 'opinions', 'interviews', 'news');
					break;
				case 'interviews':
				default:
					$category_order = array('opinions', 'interviews', 'reviews', 'news');
					break;
			}

			$category_order = array('opinions', 'interviews');

			echo '<!-- test -->';

			foreach( $category_order as $cat_group ) {
								if( $cat_group == 'opinions' ) {
									?>
									<section class="main-group main-group-5" id="opinions">
										<h2 class="main-group-title cat-opinions">Opinions</h2>
										<a href="<?php echo get_category_link( get_cat_ID( 'opinions' ) ); ?>" class="main-group-more">More Opinions</a>
										<ul class="main-group-items">

											<?php
											$posts = get_posts(array(
												'numberposts' => 5,
												'category_name' => 'opinions'
											));
											foreach( $posts as $i => $post ) {
												setup_postdata( $post );
												
												$size = 'gridlist-thumb-';
												if( $i == 0 ) { $size .= '2by1'; }
												else { $size .= '1by1'; }

												if( get_field('alt_title') ) {
													$title = get_field('alt_title');
												} else { $title = get_the_title(); }
												?>
				<li class="main-group-item">
													<div style="background-image: url(<?php echo get_post_image_url($post, $size); ?>);" class="main-group-item-image main-group-item-image-nonretina"></div>
													<div style="background-image: url(<?php echo get_post_image_url($post, $size . '-retina'); ?>);" class="main-group-item-image main-group-item-image-retina"></div>
													<a href="<?php the_permalink(); ?>">
														<span class="main-group-5-title"><?php echo $title; ?></span>
														<span class="main-group-5-meta-date meta-date"><?php echo get_the_date(); ?></span>
													</a>
												</li>
												<?php
											}
											?>

										</ul>
									</section>
									<?php
								}
				if( $cat_group == 'interviews' ) {
					?>
					<section class="main-group main-group-4" id="interviews">
						<h2 class="main-group-title cat-interviews">Interviews</h2>
						<a href="<?php echo get_category_link( get_cat_ID( 'interviews' ) ); ?>" class="main-group-more">More Interviews</a>
						<ul class="main-group-items">

							<?php
							$posts = get_posts(array(
								'numberposts' => 4,
								'category_name' => 'interviews'
							));
							foreach( $posts as $i => $post ) {
								setup_postdata( $post );
								
								$size = 'gridlist-thumb-1by1';
								?>
<li class="main-group-item">
									<div style="background-image: url(<?php echo get_post_image_url($post, $size); ?>);" class="main-group-item-image main-group-item-image-nonretina"></div>
									<div style="background-image: url(<?php echo get_post_image_url($post, $size . '-retina'); ?>);" class="main-group-item-image main-group-item-image-retina"></div>
									<a href="<?php the_permalink(); ?>">
										<?php
										if( get_field('subject') || get_field('subtitle') ) {
											if( get_field('subject') ) {
												echo '<span class="main-group-4-title">'.get_field('subject').'</span>';	
											}
											if( get_field('subtitle') ) {
												echo '<span class="main-group-4-subtitle">'.get_field('subtitle').'</span>';	
											}
										} else {
											echo '<span class="main-group-4-title">'.get_the_title().'</span>';
										}
										?>
										<span class="main-group-4-meta-date meta-date"><?php echo get_the_date(); ?></span>
									</a>
								</li>
								<?php
							}
							?>

						</ul>
					</section>
					<?php
				}
			}
			?>
		</div>
	</div>

<?php get_template_part( 'gridlist' ); ?>

<?php get_footer(); ?>
