/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);

if( document.querySelectorAll('iframe, embed, object').length > 0 ) {
	;(function(e,t){"use strict";e.fitVids=function(e,t){var n=document.querySelectorAll(e);if(!n)return;var r={customSelector:null};var i=document.createElement("div"),s=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];i.className="fit-vids-style";i.innerHTML="­<style>         		  .fluid-width-video-wrapper {        			 width: 100%;                     			 position: relative;              			 padding: 0;                      		  }                                   											  		  .fluid-width-video-wrapper iframe,  		  .fluid-width-video-wrapper object,  		  .fluid-width-video-wrapper embed {  			 position: absolute;              			 top: 0;                          			 left: 0;                         			 width: 100%;                     			 height: 100%;                    		  }                                   		</style>";s.parentNode.insertBefore(i,s);if(t)r=JSON.parse(JSON.stringify(t));var o=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];if(r.customSelector)o.push(r.customSelector);var u=[];for(var a=0;a<n.length;a++){var f=n[a],l=f.querySelectorAll(o.join(","));if(l.length>0){for(var c=0;c<l.length;c++){u.push(l[c])}}}for(var a=0;a<u.length;a++){var f=u[a];if(f.tagName.toLowerCase()==="embed"&&f.parentNode.tagName==="object"||/fluid-width-video-wrapper/.test(f.parentNode.className)){return}var h=f.tagName.toLowerCase()==="object"||f.getAttribute("height")&&!isNaN(parseInt(f.getAttribute("height"),10))?parseInt(f.getAttribute("height"),10):f.clientHeight,p=!isNaN(parseInt(f.getAttribute("width"),10))?parseInt(f.getAttribute("width"),10):f.clientWidth,d=h/p;if(!f.getAttribute("id")){var v="fitvid"+Math.floor(Math.random()*999999);f.setAttribute("id",v)}f.removeAttribute("height");f.removeAttribute("width");var m=document.createElement("div");m.className="fluid-width-video-wrapper";m.appendChild(f.cloneNode(true));f.parentNode.replaceChild(m,f);m.style.paddingTop=""+d*100+"%"}}})(window)
	window.onload = function() { fitVids('#content p'); }
}

if( document.getElementById('hero') !== null ) {
	/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-cssanimations-prefixed-testprop-testallprops-domprefixes-load
	 */
	;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.cssanimations=function(){return C("animationName")};for(var D in o)v(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e.prefixed=function(a,b,c){return b?C(a,b,c):C(a,"pfx")},e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

	// HERO SCROLLER
	var animEndEventNames = {
			'WebkitAnimation': 'webkitAnimationEnd',
			'OAnimation': 'oAnimationEnd',
			'msAnimation': 'MSAnimationEnd',
			'animation': 'animationend'
		},
		support = { animations: Modernizr.cssanimations },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		component = document.getElementsByClassName('hero-images'),
		items = document.getElementsByClassName('hero-image-item'),
		current = 0,
		itemsCount = items.length,
		isAnimating = false,
		hero = [],
		heroInfo = document.getElementsByClassName('hero-info'),
		heroTitle = document.getElementsByClassName('hero-title')[0],
		header = document.getElementById('header');

	document.getElementById('hero-next').onclick = function() { navigate( 'next' ); };
	document.getElementById('hero-image-next').onclick = function() { navigate( 'next' ); };
	document.getElementById('hero-prev').onclick = function() { navigate( 'prev' ); };
	document.getElementById('hero-image-prev').onclick = function() { navigate( 'prev' ); };

	for( var i = 0; i < itemsCount; i++ ) {
		hero[i] = {
			title: heroInfo[i].querySelectorAll('.hero-title')[0].innerHTML,
			permalink: heroInfo[i].querySelectorAll('.hero-title')[0].getAttribute('href'),
			category: heroInfo[i].querySelectorAll('.hero-meta-category')[0].textContent,
			categoryClass: heroInfo[i].querySelectorAll('.hero-meta-category')[0].getAttribute('class'),
			date: heroInfo[i].querySelectorAll('.hero-meta-date')[0].textContent
		};
	}

	heroInfo = heroInfo[0];

	function navigate( dir ) {
		if( isAnimating ) { return false; }
		isAnimating = true;
		var cntAnims = 0;

		var currentItem = items[current];
		var heroOld = current;

		if( dir === 'next' ) {
			current = current < itemsCount - 1 ? current + 1 : 0;
		} else if( dir === 'prev' ) {
			current = current > 0 ? current - 1 : itemsCount - 1;
		}

		var nextItem = items[current];
		var i;

		var onEndAnimationCurrentItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
			this.classList.remove('current');
			
			if( dir === 'next' ) { i = 'navOutNext'; }
			else { i ='navOutPrev'; }
			this.classList.remove( i );

			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		};

		var onEndAnimationNextItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationNextItem );
			this.classList.add('current');
			
			if( dir === 'next' ) { i = 'navInNext'; }
			else { i ='navInPrev'; }
			this.classList.remove( i );
			
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		};

		currentItem.classList.add( dir === 'next' ? 'navOutNext' : 'navOutPrev' );
		nextItem.classList.add( dir === 'next' ? 'navInNext' : 'navInPrev' );

		if( support.animations ) {
			currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
			nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
		}
		else {
			onEndAnimationCurrentItem();
			onEndAnimationNextItem();
		}

	//	heroInfo.style.height = 'auto';
	//	var heroInfoHeight = getComputedStyle(heroInfo)['height'];
		heroTitle.innerHTML = hero[current].title;
	//	var heroInfoHeightNew = getComputedStyle(heroInfo)['height'];

		var heroNavigation = document.getElementsByClassName('hero-navigation')[0];
		var heroImage = document.getElementsByClassName('hero-image')[0];

	//	var heroNavHeight = ( getComputedStyle(heroNavigation)['height'] + heroNavigation.top ) - ( getComputedStyle(header)['height'] + ( getComputedStyle(heroImage)['height'] + heroImage.top ) - 44 );

		heroTitle.innerHTML = hero[heroOld].title;
	//	heroInfo.style.height = heroInfoHeight;

		heroTitle.style.opacity = 0;
		setTimeout(function() {
			heroTitle.innerHTML = hero[current].title;
			heroTitle.style.opacity = 1;
	//		heroInfo.style.height = heroInfoHeightNew;
	//		document.getElementsByClassName('hero-navigation-buttons')[0].style.bottom = (heroNavHeight/2) - 22;
		}, 125);

		document.getElementsByClassName('hero-meta')[0].style.opacity = 0;
		setTimeout(function() {
			document.getElementsByClassName('hero-meta-category')[0].textContent = hero[current].category;
			document.getElementsByClassName('hero-meta-category')[0].setAttribute('class', hero[current].categoryClass);
			document.getElementsByClassName('hero-meta-date')[0].textContent = hero[current].date;
			document.getElementsByClassName('hero-meta')[0].style.opacity = 1;
		}, 125);
	}
}

// SEARCH FORM
var search = document.getElementById('search-form'),
	searchInput = document.getElementById('s'),
	searchTrigger = document.getElementById('header-search-trigger'),
	searchClose = document.getElementById('header-search-close');

searchTrigger.onclick = function() {
	search.classList.add('visible');
	searchInput.focus();
};

searchClose.onclick = function() {
	search.classList.remove('visible');
	return false;
};


// GRIDLIST
var gridlist = document.getElementsByClassName('gridlist')[0],
	gridlistLoadmore = document.getElementById('gridlist-loadmore'),
	gridlistIcon = document.getElementsByClassName('gridlist-chooser-item'),
	gridlistIconGrid = document.getElementById('gridlist-icon-grid'),
	gridlistIconList = document.getElementById('gridlist-icon-list'),
	gridlistContent = document.getElementById('gridlist-content'),
	httpRequest;

for( var i = 0; i < gridlistIcon.length; i++ ) {
	gridlistIcon[i].onclick = function() {
		for( var j = 0; j < gridlistIcon.length; j++ ) {
			if( j != i ) { gridlistIcon[j].classList.remove('gridlist-icon-active'); }
		}
		this.classList.add('gridlist-icon-active');
		gridlist.setAttribute( 'id', this.getAttribute('data-gridlist') );
		if( supports_html5_storage() ) { localStorage['industry_gridlist'] = this.getAttribute('data-gridlist'); }
	};
}

if( supports_html5_storage() && localStorage['industry_gridlist'] ) {
	if( localStorage['industry_gridlist'] == 'gridlist-list' ) {
		gridlistIconList.onclick();
	}
}

gridlistLoadmore.onclick = function() {

	this.classList.add('rotate');

	if( window.XMLHttpRequest ) {
		httpRequest = new XMLHttpRequest();
	} else if( window.ActiveXObject ) {
		try {
			httpRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
		}
		catch( e ) {
			try {
				httpRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
			}
			catch( e ) {}
		}
	}

	if( ! httpRequest ) {
		console.log( 'Cannot create XMLHTTP instance. Bailing.' );
		return false;
	}

	httpRequest.onreadystatechange = function() {
		if( httpRequest.readyState == 4 ) {
			gridlistLoadmore.classList.remove('rotate');

			gridlistContent.innerHTML = gridlistContent.innerHTML + httpRequest.responseText;
			gridlistLoadmore.blur();
		}
	};

	var offsetNumber = document.getElementsByClassName('gridlist-article').length;

	httpRequest.open( 'POST', ajax.ajaxurl );
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.send( 'action=gridlist&options='+ajax.query_options+'&nonce='+ajax.nonce+'&offset=' + offsetNumber );

};

// Let's get the social count
/*
	if( window.XMLHttpRequest ) {
		httpRequest = new XMLHttpRequest();
	} else if( window.ActiveXObject ) {
		try {
			httpRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
		}
		catch( e ) {
			try {
				httpRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
			}
			catch( e ) {}
		}
	}

	if( ! httpRequest ) {
		console.log( 'Cannot create XMLHTTP instance. Bailing.' );
	}

	httpRequest.onreadystatechange = function() {
		if( httpRequest.readyState == 4 ) {
			var response = JSON.parse( httpRequest.responseText );
			document.getElementById('twitter-count').innerHTML = response.twitter;
			document.getElementById('facebook-count').innerHTML = response.facebook;
		}
	};

	httpRequest.open( 'POST', ajax.ajaxurl );
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.send( 'action=socialcount&url='+ajax.url+'&nonce='+ajax.nonce );
*/


// Make HEADER SOCIAL visible
window.fbAsyncInit = function() {
	FB.Event.subscribe('xfbml.render', function(response) {
		document.getElementById('header-social').classList.add('js-visible');
	});
};


// FUNCTIONS
function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) { return false; }
}