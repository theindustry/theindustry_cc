<?php
$gridlist_class = '';
if( is_category() ) {
	$gridlist_class = ' gridlist-' . strtolower( single_cat_title( '', false ) );
}
?>
<section class="gridlist<?php echo $gridlist_class; ?>" id="gridlist-grid">

	<div class="inner" id="gridlist-header">
		<?php if( is_category() ) { ?><h1 class="page-title"><?php single_cat_title(); ?></h1><?php } ?>
		<?php if( is_search() ) { ?><h1 class="page-title"><?php echo 'Search Results for &ldquo;'.get_query_var('s').'&rdquo;'; ?></h1><?php } ?>
		<ul id="gridlist-chooser">
			<li><button class="gridlist-chooser-item gridlist-icon-list" id="gridlist-icon-list" data-gridlist="gridlist-list">List</button></li>
			<li><button class="gridlist-chooser-item gridlist-icon-grid gridlist-icon-active" id="gridlist-icon-grid" data-gridlist="gridlist-grid">Grid</button></li>
		</ul>
	</div>

	<div id="gridlist-content">
		<?php get_template_part( 'gridlist', 'content' ); ?>
	</div>

	<div id="gridlist-footer">
	<?php if( $posts ) { ?>
		<button id="gridlist-loadmore">Load More</button>
	<?php } else { ?>
		<span id="gridlist-nada">No posts found.</span>
	<?php } ?>
	</div>

</section>