<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

define( 'WP_MEMORY_LIMIT', '96M' );
define('DB_NAME', 'theindustry_mk3_v2');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define( 'WP_DEBUG', FALSE === strpos( $_SERVER['REQUEST_URI'], '/wp-admin/' ) );

/*
define('DB_NAME', 'industry_wp_database');
define('DB_USER', 'indust_user');
define('DB_PASSWORD', 'VDKgGVFXih4aU2R7783B6');
define( 'WP_MEMORY_LIMIT', '32M' );
define( 'WP_DEBUG', FALSE );
*/

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

/** MySQL database username */


/** MySQL database password */

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IL/||Tsfl02a4!]++>$;_(ru+aWLAq-&Tr?.`*j[~&L4,:D9(d)~TTj8X/%{?Qx3');
define('SECURE_AUTH_KEY',  'bBGzXg*mi)}@A6{(#:X{Q~FJ*:muFe+&|t>YM6h}(9](#+Qp4Mu;j6|yGhH#D?tv');
define('LOGGED_IN_KEY',    'S;tZSd:Y9n8b/yM$,|j:z$:[no48K9^<,+$K Q3O1<!bH&(<|_VYp:|=GP=XsCe(');
define('NONCE_KEY',        'U)DR4`dlC2K=cfY|B-Fr*v0B)anMO/8rmKLO4RPAICsI#G{@4?*k-={C0+/^*KU+');
define('AUTH_SALT',        'BE=#NI.R.xsKLh^-71<Y*/QqZmKe+~`sM.+ 8#YChq382 `J1||B##t@YSk>x]kn');
define('SECURE_AUTH_SALT', 'e_3R:?# va33xx-K0x}7[{<=Wfa7/j]l?H-@29fw|?_.[JZ]{,POo [v_w<<2n=-');
define('LOGGED_IN_SALT',   'w:S0f&O+~2Wg_g+T.qtsg~NEu%n43<>t+m1ns[rDf@C~QH,~)tuZ040rtbu4]e_B');
define('NONCE_SALT',       '<++J XV+Qf:=e*ullL>yr<1}u#)8~d0`-~/TOFl(w/0yH,?TLHQg7RA5k9s2fM}W');

define( 'AWS_ACCESS_KEY_ID', 'AKIAJNIFYO5TQE36UI5A' );
define( 'AWS_SECRET_ACCESS_KEY', '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' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ti_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */


define( 'UPLOADS', ''.'assets' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', ABSPATH . 'wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');