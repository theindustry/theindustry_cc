	<footer id="footer">
		<div class="inner">
			<span class="copyright">&copy; 2015 Industry Media, Corp.</span>
			<ul class="social">
				<li><a href="https://www.facebook.com/theindustry.cc" class="social-facebook">The Industry on Facebook</a></li>
				<li><a href="https://twitter.com/industry" class="social-twitter">The Industry on Facebook</a></li>
			</ul>
		</div>
	</footer>

	<?php wp_footer(); ?>
	
	<script src="<?php echo $GLOBALS['template_url']; ?>/assets/js/app.min.js"></script>

	<?php if( is_single() ) : ?>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	<?php else: ?>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	<?php endif; ?>

	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1512442232334193&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
</body>
</html>