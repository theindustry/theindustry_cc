<!DOCTYPE html>
<html class="nojs" id="html">
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php wp_title('-'); ?></title>

<link rel="stylesheet" href="<?php echo $GLOBALS['template_url']; ?>/assets/css/style.css">
<script> document.getElementById("html").className = "js"; </script>
<?php wp_head(); ?>

<script type="text/javascript" src="//use.typekit.net/gqy7mxh.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</head>

<body <?php body_class(); ?>>

<nav id="header">
	<a href="<?php echo $GLOBALS['site_url']; ?>" id="logo">
		<span id="logotype">The Industry</span>
	</a>

	<?php ti_breadcrumbs(); ?>

	<div class="header-social">
		<?php
		if( is_single() ) {
			$wordTwitter = 'Tweet';
			$wordFacebook = 'Share';
		} else {
			$wordTwitter = 'Follow';
			$wordFacebook = 'Like';
		}
		?>
		<a href="<?php echo get_twitter_link(); ?>" target="_blank" class="header-social-item header-twitter"><?php echo $wordTwitter; ?></a>
		<a href="<?php echo get_facebook_link(); ?>" target="_blank" class="header-social-item header-facebook"><?php echo $wordFacebook; ?></a>
	</div>

	<button id="header-search-trigger">Search</button>

	<!--
	<div id="header-social">
		<?php
		/*
		create_twitter_link();
		create_facebook_link();
		*/
		?>
	</div>
	-->

	<form role="search" method="get" id="search-form" action="<?php echo $GLOBALS['site_url'] . '/'; ?>">
		<label for="s">
			<span class="hidden">Search:</span>
			<input type="text" value="" name="s" id="s" placeholder="Search&hellip;">
			<button type="submit" class="search-submit">Search</button>
		</label>
		<button id="header-search-close">Close</button>
	</form>
</nav>
