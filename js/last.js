
			var timer = null;
						window.onbeforeunload=function(){
							document.documentElement.scrollTop=document.body.scrollTop=0;
						}
			$(window).scroll(function() {
				//console.log($(window).scrollTop());

				$(".botarrow").css("display", "none");
				$(".lastlogo").css("animation", "logomove 1s linear forwards");
				//随滚动条移动的图片块
				if($(window).scrollTop() > 200 && $(window).scrollTop() < 600) {
					$(".ft1").css("display", "block")

				} else {
					$(".ft1").css("display", "none")
				}
				if($(window).scrollTop() > 700 && $(window).scrollTop() < 1500) {
					$(".ft2").css("display", "block")

				} else {
					$(".ft2").css("display", "none")
				}

				//移动的模块
				if($(window).scrollTop() > 2000) {
					$(".rain").css("z-index", "3");
				} else {
					$(".rain").css("z-index", "1");
				}

				if($(window).scrollTop() > 587) {
					var change = $(window).scrollTop() - 587;
					
						$(".bird").css({
						"top": 500 - (0.6 * change),
						"left": 500 - (0.6 * change)
					}).toggleClass("flybird");
//						$(".midbuild").animate({"top":587 - change})
					$(".midbuild").css("top", 587 - change);
//					$(".midbuild").animate({"top":587-change},"fast");
//					$(".block").animate({"left": "+=50px"}, "slow");
					$(".leftbuild").css("top", 1528 - (2.5 * change));
					$(".rightbuild").css("top", 2383 - (3 * change));
					$(".plane").css({
						"top": 1200 - (2 * change),
						"left": -720 + (5 * change)
					});

				}
				if($(window).scrollTop() > 1000) {
					var change2 = $(window).scrollTop() - 1000;

					$(".brige").css("top", 2911 - (3.5 * change2));
				}
				
				if($(window).scrollTop() > 1200) {
					var change3 = $(window).scrollTop() - 1200;

					$(".rubbish_g").css("top", 2600 - (4 * change3));
					$("irona").css("top", 2050 - (6 * change3));
					$("ironb").css("top", 3600 - (5 * change3));

				}
				//雨中的建筑
				if($(window).scrollTop() > 2300) {
					var change4 = $(window).scrollTop() - 2300;

					$(".rainbuild_mid").css("top", 2100 - (1 * change4));
					$(".r_left").css("top", 2000 - (1.1 * change4));
					$(".r_bot").css("top", 1300 - (1 * change4));
					$(".r_bot").css("top", 1300 - (1 * change4));

				}
				//海浪
				if($(window).scrollTop() > 3600) {
					var change5 = $(window).scrollTop() - 3600;
					$("#wave-c").css("top", 2800 - (1 * change5));
					$(".wave-wrap").css("top", 2750 - (1 * change5));

				}
				//女孩坠入水中	

				if($(window).scrollTop() > 4000) {

					var change6 = $(window).scrollTop() - 4000;
					$(".bubble").css("top", 682 - (1 * change6));
					$(".girl").css("top", -200 + (1 * change6));

					$("#sink-stone").css("top", 1053 - (1 * change6));
					$("#fish-a").css({
						"right": 0 + (0.1 * change6)
					});
					$("#shark-c").css({
						"left": -305 + (0.35 * change6)
					});
					$("#fish-c").css({
						"left": 0 + (0.35 * change6)
					});
					$("#shark-b").css({
						"right": 0 + (0.35 * change6)
					});

					$("#fish-b").css({
						"right": 0 + (0.35 * change6),
						"transform": "scale(" + (2 - 0.001 * change6) + ")"
					});

					$("#shark-a").css({
						"right": -200 + (0.5 * change6),
						"transform": "scale(" + (2 - 0.001 * change6) + ")"
					});
					$(".neckness").css("transform", "scale(0.2)");

				}

				//爆裂部分
				if($(window).scrollTop() > 6200 && $(window).scrollTop() < 6400) {
					$(".girl").css("display", "block");
					$(".neckness").css("transform", "scale(0.6)");

					$(".boom").css("display", "none");
					$(".boomlight").css("display", "none");
					$(".piece").css("display", "none");
					$(".glass").css("display", "none");
					$(".lastlogo").css("display", "block");
			
				}

				if($(window).scrollTop() > 6400) {
					$(".girl").css("display", "none");
					$(".boom").css("display", "block");
					$(".boomlight").css("display", "block");
					$(".piece").css("display", "block");
					$(".glass").css("display", "block");
					$(".lastlogo").css("display", "none");
					$(".lastarea").css("display", "block");
					
					$(".lastarea").css("")

					//      $(window).mousemove(function(e) {
					//          e = e || window.event;
					//          xx = e.pageX || e.clientX ;
					//          yy =parseInt( e.pageY || e.clientY)-6500 ;
					//          console.log(xx+","+yy);
					//          
					//      });
					$(".lastarea").mousemove(function(e) {
						var xx = e.pageX - $(this).offset().left; //获取当前鼠标相对img的X坐标  
						var yy = e.pageY - $(this).offset().top; //获取当前鼠标相对img的Y坐标  
						
						$(".lastarea").css("transform", "rotateY(" + (xx - 810) * 3.5 / 192 + "deg) rotateX(" + (427 - yy) *2 / 86 + "deg) perspective(2000px) translate3d(" + (xx - 810) * 25 / 192 + "px,0,0)")
						console.log(xx + '   ' + yy);
					})

					clearInterval(timer);
					timer = setInterval(function() {
						var bgp = parseInt($(".join").css("background-position-y"));
						if(bgp <= -4140) {
							$(".join").css("background-position-y", 0);

						} else {
							$(".join").css("background-position-y", bgp - 180);
						}
					}, 150);

				

				} else {
					
					$(".lastarea").css("display", "none");
				}

				//雷电部分	
				if($(window).scrollTop() > 2200 && $(window).scrollTop() < 2600) {
					$(".lightbanner").css("animation", "lightbanner 1s");
					$(".light1").css("animation", "light 1s");

				} else {
					$(".lightbanner").css("animation", "");
					$(".light1").css("animation", "");

				}

				if($(window).scrollTop() > 2400 && $(window).scrollTop() < 2800) {
					$(".lightbanner2").css("animation", "lightbanner 1s");
					$(".light2").css("animation", "light 1s");

				} else {
					$(".lightbanner2").css("animation", "");
					$(".light2").css("animation", "");
				}
				if($(window).scrollTop() > 3000 && $(window).scrollTop() < 3400) {
					$(".lightbanner3").css("animation", "lightbanner 1s");
					$(".light3").css("animation", "light 1s");

				} else {
					$(".lightbanner3").css("animation", "");
					$(".light3").css("animation", "");
				}

				//返回顶部
				$(".nav-btn-4").on("click", function() {
					$(window).scrollTop(function() {
						return 0;
					})

				})
			});
		