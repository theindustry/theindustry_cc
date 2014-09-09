<?php
add_filter('admin_footer_text', 'admin_footer');
function admin_footer() {
	echo 'Welcome to <em>The Industry</em>.';
}

add_action( 'login_enqueue_scripts', function() {
	?>
    <style type="text/css">
    	body.login { background-color: #383c40; }
        body.login div#login h1 a {
            background-image: url(<?php echo $GLOBALS['template_url']; ?>/admin/img/login-logo.png);
        }
    </style>
	<?php
} );