$(document).ready(function() {

	var animEndEventNames = {
		'WebkitAnimation': 'webkitAnimationEnd',
		'OAnimation': 'oAnimationEnd',
		'msAnimation': 'MSAnimationEnd',
		'animation': 'animationend'
	},
	support = { animations: Modernizr.cssanimations },
	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
	component = $('.hero-images'),
	items = $('.hero-images-wrapper').children(),
	current = 0,
	navNext = $('#hero-image-next, #hero-next'),
	navPrev = $('#hero-image-prev, #hero-prev'),
	itemsCount = items.length,
	isAnimating = false,
	hero = [],
	heroInfo = $('.hero-info'),
	header = $('#header'),
	search = $('#search-form'),
	gridlist = $('.gridlist'),
	gridlistGrid = $('.gridlist-icon-grid'),
	gridlistList = $('.gridlist-icon-list'),
	gridlistArticles = $('.gridlist-article');

	function init() {
		$('.hero-item').each(function(i) {
			hero[i] = {
				title: $(this).find('.hero-title').text(),
				category: $(this).find('.hero-meta-category').text(),
				categoryClass: $(this).find('.hero-meta-category').attr('class'),
				date: $(this).find('.hero-meta-date').text()
			};
		});
		$('.hero-item').not(':first').remove();

		navNext.on('click', function(ev) {
			ev.preventDefault();
			navigate( 'next' );
		});
		navPrev.on('click', function(ev) {
			ev.preventDefault();
			navigate( 'prev' );
		});
	}

	function navigate( dir ) {
		if( isAnimating ) { return false; }
		isAnimating = true;
		var cntAnims = 0;

		var currentItem = items.eq(current);
		var heroOld = current;

		if( dir === 'next' ) {
			current = current < itemsCount - 1 ? current + 1 : 0;
		} else if( dir === 'prev' ) {
			current = current > 0 ? current - 1 : itemsCount - 1;
		}

		var nextItem = items.eq(current);
		var i;

		var onEndAnimationCurrentItem = function() {
			$(this).off( animEndEventName, onEndAnimationCurrentItem );
			$(this).removeClass('current');
			
			if( dir === 'next' ) { i = 'navOutNext'; }
			else { i ='navOutPrev'; }
			$(this).removeClass( i );

			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		};

		var onEndAnimationNextItem = function() {
			$(this).off( animEndEventName, onEndAnimationNextItem );
			$(this).addClass('current');
			
			if( dir === 'next' ) { i = 'navInNext'; }
			else { i ='navInPrev'; }
			$(this).removeClass( i );
			
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		};

		if( support.animations ) {
			currentItem.on( animEndEventName, onEndAnimationCurrentItem );
			nextItem.on( animEndEventName, onEndAnimationNextItem );
		}
		else {
			onEndAnimationCurrentItem();
			onEndAnimationNextItem();
		}

		currentItem.addClass( dir === 'next' ? 'navOutNext' : 'navOutPrev' );
		nextItem.addClass( dir === 'next' ? 'navInNext' : 'navInPrev' );

		heroInfo.css('height', 'auto');
		var heroInfoHeight = heroInfo.outerHeight();
		$('.hero-title').text( hero[current].title );
		var heroInfoHeightNew = heroInfo.outerHeight();

		var heroNavHeight = ($('.hero-navigation').height() + $('.hero-navigation').position().top) - ( $('#header').height() + ( $('.hero-image').height() + $('.hero-image').position().top ) ) - 44;

		$('.hero-title').text( hero[heroOld].title );
		heroInfo.css('height', heroInfoHeight);

		$('.hero-title').css('opacity', 0);
		setTimeout(function() {
			$('.hero-title').html( hero[current].title );
			$('.hero-title').css('opacity', 1);
			heroInfo.css('height', heroInfoHeightNew);
			$('.hero-navigation-buttons').css( 'bottom', (heroNavHeight / 2) - 22 );
		}, 125);

		$('.hero-meta').css('opacity', 0);
		setTimeout(function() {
			$('.hero-meta-category').text( hero[current].category );
			$('.hero-meta-category').attr( 'class', hero[current].categoryClass );
			$('.hero-meta-date').text( hero[current].date );
			$('.hero-meta').css('opacity', 1);
		}, 125);
	}

	$('#header-search-trigger').on('click', function(ev) {
		search.addClass('visible');
		$('#s').focus();
	});
	$('#header-search-close').on('click', function(ev) {
		search.removeClass('visible');
		ev.preventDefault();
	});

	$('#gridlist-loadmore').on('click', function(ev) {
		$(this).addClass('rotate');
	});

	gridlistList.on('click', function(ev) {
		gridlist.removeAttr('id');

		gridlistArticles.addClass('invisible');
		setTimeout(function() { gridlistArticles.removeClass('invisible'); }, 1);

		gridlistList.addClass('gridlist-icon-active');
		gridlistGrid.removeClass('gridlist-icon-active');
	});

	gridlistGrid.on('click', function(ev) {
		gridlist.attr('id', 'gridlist-grid');

		gridlistArticles.addClass('invisible');
		setTimeout(function() { gridlistArticles.removeClass('invisible'); }, 1);

		gridlistGrid.addClass('gridlist-icon-active');
		gridlistList.removeClass('gridlist-icon-active');
	});

	init();
});