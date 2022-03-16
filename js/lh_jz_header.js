$(function() {
		$('.menu-btn').on('mouseover', function() {
			$('.main-menu-list').css('display', 'block');
			$('#topBar-menu').css({
				'height': '500px',
				'opacity': '0.95'
			});

		});
		$('#topBar-menu').on('mouseover', function() {
			$('.main-menu-list').css('display', 'block');
			$('#topBar-menu').css({
				'height': '500px',
				'opacity': '0.95'
			});
		})
		$('#topBar-menu').on('mouseout', function() {
			$('#topBar-menu').css({
				'height': '0',
			});

		});
		$('.menu-btn').on('mouseout', function() {
			$('#topBar-menu').css({
				'height': '0',
			});

		});

		setInterval(() => {
			$('.top-right > a').removeClass('fade2');
			$('.top-right > a').addClass('fade');
			setTimeout(() => {
				$('.top-right > a').removeClass('fade');
			}, 400);
			setTimeout(() => {
				$('.top-right > a').addClass('fade2');
				if($('.top-right > a').html() == '领取网易严选宝箱') {
					$('.top-right > a').html('限时领取免费课程');
				} else {
					$('.top-right > a').html('领取网易严选宝箱');
				}
			}, 800);

		}, 3500);
		$('#NIE-topBar-news').on('mouseover', function() {
			$('#NIE-topBar-news').css({
				'width': '960',
				'height': '305'
			})
			$('#NIE-topBar-news-link').css({
				'height': '250'
			})
			$('.NIE-topBar-abc-s').css({
				'visibility': 'hidden'
			})
		})

		$('#NIE-topBar-news').on('mouseout', function() {
			$('#NIE-topBar-news').css({
				'width': '420',
				'height': '54'
			})
			$('#NIE-topBar-news-link').css({
				'height': '0'
			})
			$('.NIE-topBar-abc-s').css({
				'visibility': 'visible'
			})
		})
	})
	//function Scroll() {}
	//Scroll.prototype.upScroll = function(dom, _h, interval) {
	//	var dom = document.getElementById(dom);
	//	var timer = setTimeout(function() {
	//		var _field = dom.firstElementChild;
	//		_field.style.marginTop = _h;
	//		clearTimeout(timer);
	//	}, 1000)
	//	setInterval(function() {
	//		var _field = dom.firstElementChild;
	//		_field.style.marginTop = "0px";
	//		_field.style.opacity = 1;
	//		dom.appendChild(_field);
	//		var _field = dom.firstElementChild
	//		_field.style.marginTop = _h;
	//		_field.style.opacity = 0;
	//	}, interval)
	//}
	//var myScroll = new Scroll();
window.onload = function() {
	var timer_NIE_head = null; //游戏列表的一次性定时器
	var time_NIE_top_img = null;
	//	myScroll.upScroll("NIE_topBar_list","-52px",4000);		//头部右侧的广告栏
	//中间的广告图片
	$("#NIE_topBar_news").on("mouseenter", function() {
		time_NIE_top_img = setTimeout(function() {
			$("#NIE_topBar_news").addClass("NIE_topBar_news_hover");
		}, 200)
	})
	$("#NIE_topBar_news").add("#NIE_topBar_news a").on("mouseleave", function() {
		clearTimeout(time_NIE_top_img);
		$("#NIE_topBar_news").removeClass("NIE_topBar_news_hover");
	})
	$(".menu-btn").add("#NIE_topBar_menu").on("mouseenter", function() {
		clearTimeout(timer_NIE_head);
		$("#NIE_topBar_menu").addClass("NIE_topBar_menu_hover").delay(1000);
	})
	$("#NIE_topBar_more").on("click", function() {
		if($("#NIE_topBar_more").hasClass("open")) {
			$(".sportsAndArder").css({
				"margin-left": 0,
				"z-index": 3
			});
			$("#NIE_topBar_more").removeClass("open").text("更多热门端游");
		} else {
			$(".sportsAndArder").css({
				"margin-left": 140,
				"z-index": 10
			});
			$("#NIE_topBar_more").addClass("open").text("<<");
		}
	})
	$("#NIE_topBar_more2").on("click", function() {
		if($("#NIE_topBar_more2").hasClass("open")) {
			$("#NIE_table").removeClass("more_mobiel");
			$("#NIE_topBar_more2").removeClass("open").text("更多热门手游");
		} else {
			$("#NIE_table").addClass("more_mobiel");
			$("#NIE_topBar_more2").addClass("open").text("<<");
		}
	})
	$("#NIE_topBar_menu").add(".menu-btn").on("mouseleave", function() {
		timer_NIE_head = setTimeout(function() {
			$("#NIE_topBar_menu").removeClass("NIE_topBar_menu_hover");
		}, 400)
	})
}

//function Scroll() {}
//Scroll.prototype.upScroll = function(dom, _h, interval) {
//	var dom = document.getElementById(dom);
//	var timer = setTimeout(function() {
//		var _field = dom.firstElementChild;
//		_field.style.marginTop = _h;
//		clearTimeout(timer);
//	}, 1000)
//	setInterval(function() {
//		var _field = dom.firstElementChild;
//		_field.style.marginTop = "0px";
//		_field.style.opacity = 1;
//		dom.appendChild(_field);
//		var _field = dom.firstElementChild
//		_field.style.marginTop = _h;
//		_field.style.opacity = 0;
//	}, interval)
//}
//var myScroll = new Scroll();
window.onload = function() {
	var timer_NIE_head = null; //游戏列表的一次性定时器
	var time_NIE_top_img = null;
	//	myScroll.upScroll("NIE_topBar_list","-52px",4000);		//头部右侧的广告栏
	//中间的广告图片
	$("#NIE_topBar_news").on("mouseenter", function() {
		time_NIE_top_img = setTimeout(function() {
			$("#NIE_topBar_news").addClass("NIE_topBar_news_hover");
		}, 200)
	})
	$("#NIE_topBar_news").add("#NIE_topBar_news a").on("mouseleave", function() {
		clearTimeout(time_NIE_top_img);
		$("#NIE_topBar_news").removeClass("NIE_topBar_news_hover");
	})
	$(".menu-btn").add("#NIE_topBar_menu").on("mouseenter", function() {
		clearTimeout(timer_NIE_head);
		$("#NIE_topBar_menu").addClass("NIE_topBar_menu_hover").delay(1000);
	})
	$("#NIE_topBar_more").on("click", function() {
		if($("#NIE_topBar_more").hasClass("open")) {
			$(".sportsAndArder").css({
				"margin-left": 0,
				"z-index": 3
			});
			$("#NIE_topBar_more").removeClass("open").text("更多热门端游");
		} else {
			$(".sportsAndArder").css({
				"margin-left": 140,
				"z-index": 10
			});
			$("#NIE_topBar_more").addClass("open").text("<<");
		}
	})
	$("#NIE_topBar_more2").on("click", function() {
		if($("#NIE_topBar_more2").hasClass("open")) {
			$("#NIE_table").removeClass("more_mobiel");
			$("#NIE_topBar_more2").removeClass("open").text("更多热门手游");
		} else {
			$("#NIE_table").addClass("more_mobiel");
			$("#NIE_topBar_more2").addClass("open").text("<<");
		}
	})
	$("#NIE_topBar_menu").add(".menu-btn").on("mouseleave", function() {
		timer_NIE_head = setTimeout(function() {
			$("#NIE_topBar_menu").removeClass("NIE_topBar_menu_hover");
		}, 400)
	})
}

var oLi2 = document.getElementById("li2");
var oP = oLi2.getElementsByTagName("p");
var oIco1 = document.getElementById("ico1");
var oIco2 = document.getElementById("ico2");
var oP1 = document.getElementById("p1");
oLi2.onmouseover = function() {

	oIco2.style.display = "block";
	b(380, 10);
}
oLi2.onmouseout = function() {
	oIco2.style.display = "none";
	b(0, -10);
}
oP1.onmouseover = function() {
	b(380, 10);
}
oP1.onmouseout = function() {
	b(0, -10);
}

var timer = null;
function b(iTarget, speed) {
	
	clearInterval(timer);
	timer = setInterval(function() {
		if(oP1.offsetHeight == iTarget) {
			clearInterval(timer);
		} else {
			oP1.style.height = oP1.offsetHeight + speed + "px";
		}
	}, 10)
}