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


// FUNCTIONS
function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) { return false; }
}