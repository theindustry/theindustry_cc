<!DOCTYPE html>
<html class="nojs" id="html">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php wp_title('-'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="<?php echo $GLOBALS['template_url']; ?>/assets/css/style.css">

	<?php wp_head(); ?>

	<script> document.getElementById("html").className = "js"; </script>

	<script type="text/javascript" src="//use.typekit.net/gqy7mxh.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body <?php body_class(); ?>>

	<nav id="header">
		<a href="<?php echo $GLOBALS['site_url']; ?>" id="logo">The Industry</a>
		<?php ti_breadcrumbs(); ?>

		<button id="header-search-trigger">Search</button>

		<div id="header-social">
			<?php create_twitter_link(); ?>
			<?php create_facebook_link(); ?>

			<?php /* ?>
			<a href="<?php echo get_twitter_link(); ?>" target="_blank">Tweet <span id="twitter-count"></span></a>
			<a href="<?php echo get_facebook_link(); ?>" target="_blank" id="facebook-link">Like <span id="facebook-count"></span></a>
			<?php */ ?>
		</div>

		<form role="search" method="get" id="search-form" action="<?php echo $GLOBALS['site_url'] . '/'; ?>">
			<label for="s">
				<span class="hidden">Search:</span>
				<input type="text" value="" name="s" id="s" placeholder="Search&hellip;">
				<button type="submit" class="search-submit">Search</button>
			</label>
			<button id="header-search-close">Close</button>
		</form>
	</nav>