(function(){

	var index={

		init:function(){
			var that=this;
			this.addEvent();
			this.initTopSwiper();
			this.initTeamSwiper();
			this.initAnchor();
				this.initSkroll();
			setTimeout(function(){
			},1000);
		},
		initAnchor:function(){
			$('.nav').anchorScroll({
				fixed: 0,
				offset: -80
			});
		},
		initSkroll:function(){
			var s = skrollr.init();
		},
		initTopSwiper:function(){
			this.setVideoUI();

			var topSwiper = new Swiper('#topSwiper',{
				loop:true,
				grabCursor: true,
				paginationClickable: true,
				pagination: {
					el: '#slider .pagination',
				}
			});
			topSwiper.on('slideChange',function(event){
				$('#pageNum').html('0'+(this.realIndex+1));
			});

			$('#topSwiperNav i').eq(0).on('click', function(e){
				e.preventDefault();
				topSwiper.slidePrev();
			});
			$('#topSwiperNav i').eq(1).on('click', function(e){
				e.preventDefault();
				topSwiper.slideNext();
			});
		},
		setVideoUI:function(){
			var windowWidth=document.documentElement.clientWidth;
			var slideHeight=$('#topSwiper').height();
			$('.slide_video').css({
				position:'absolute',
				left:'50%',
				top:0,
				'z-index':2,
				'margin-left':'-'+windowWidth/2+'px',
				width: windowWidth,
				height: slideHeight
			});
		},
		initTeamSwiper:function(){
			var teamSwiper1 = new Swiper('#teamSwiper1',{
				loop:true,
				slidesPerView:3,
				spaceBetween:94,
				grabCursor: true
			});
			$('#teamSwiperNav1 i').eq(0).on('click', function(e){
				e.preventDefault();
				teamSwiper1.slidePrev();
			});
			$('#teamSwiperNav1 i').eq(1).on('click', function(e){
				e.preventDefault();
				teamSwiper1.slideNext();
			});

			var teamSwiper2 = new Swiper('#teamSwiper2',{
				loop:true,
				slidesPerView:3,
				spaceBetween:94,
				grabCursor: true
			});
			$('#teamSwiperNav2 i').eq(0).on('click', function(e){
				e.preventDefault();
				teamSwiper2.slidePrev();
			});
			$('#teamSwiperNav2 i').eq(1).on('click', function(e){
				e.preventDefault();
				teamSwiper2.slideNext();
			});

			$('.team_cont').eq(1).addClass('none');
		},
		addEvent:function(){
			var that=this;

			// $(window).resize(function(e){
				
			// });

			$('#teamTab li').click(function(event) {
				$('#teamTab li').removeClass('on');
				$(this).addClass('on');
				var index=$(this).index();
				$('.team_cont').addClass('opacity_0');
				setTimeout(function(){
					$('.team_cont').addClass('none');
					$('.team_cont').eq(index).removeClass('none ');
				},100);
				setTimeout(function(){
					$('.team_cont').eq(index).removeClass('opacity_0');
				},200);
			});

		},
		

		alert: function(tips, times) {
	        var optTimes = 2000;
	        if (times !== undefined) {
	            optTimes = times;
	        }

	        if (!$("#util-pop-alert").length) {
	            $("body").append('<div id="util-pop-alert" class="pop_alert"></div>');
	            $("#util-pop-alert").css({
	                position: 'fixed',
	                left: '50%',
	                top: '50%',
	                background: 'rgba(89,89,89,.9)',
	                color: '#fff',
	                padding: '40px 10px',
	                opacity: '0',
	                'text-align': 'center',
	                '-webkit-transform': 'translate(-50%,-50%)',
	                'transform': 'translate(-50%,-50%)',
	                'z-index': '10009',
	                'width': '68%',
	                'border-radius': '6px',
	                'line-height': '1.5',
	                'word-break': 'break-all',
	                'font-size': '16px',
	                '-webkit-transition': 'all .3s ease-in'
	            }).on('tap', function() {
	                $("#util-pop-alert").css({ opacity: '0' });
	            });
	        }
	        setTimeout(function() {
	            $("#util-pop-alert").html(tips).css({ opacity: '1', 'pointer-events': 'all' });
	        }, 0);
	        setTimeout(function() {
	            $("#util-pop-alert").css({ opacity: '0', 'pointer-events': 'none' });
	        }, optTimes);
	    },



	};

	
    window.index = index;
})();


/****************************** 锚点滚动 ******************************/
$.fn.anchorScroll = function(option) {
	return this.each(function() {
		var options = $.extend({
			fixed: 0,
			offset: 0
		}, {}, typeof option === 'object' && option);

		var $anchorMenu = $(this),
			$anchorItem = $anchorMenu.find('li'),
			pageIsScrolling = false;

		// 点击锚点时页面滚动
		$anchorItem.click(function(e) {
			if($(this).attr('href')){
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
				pageIsScrolling = true;

				try {
					var $target = $($(this).attr('href'));

					$('html, body').stop(true, false).animate({
						scrollTop: $target.offset().top + options.offset
					}, function() {
						pageIsScrolling = false;
					});

					$(this).addClass('on').siblings().removeClass('on');
				} catch (e) {}
			}else{
				
			}
		});

		$(window).on('scroll DOMContentLoaded load', function() {
			if ($(window).scrollTop() >0) {
				$('#header').addClass('scrolling');
			} else {
				$('#header').removeClass('scrolling');
			}
		});
	});
};


index.init();