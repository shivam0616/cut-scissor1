﻿$(window).on("load",function(){$("html,body").animate({scrollTop:0},1e3)}),$(document).ready(function(){var e=$(window).width(),i=$(window).height()-160;if($(window).width()>700)var o=$(".hbanner li img.sliderBigImg").height();else var o=$(".hbanner li img.slidersmallImg").height();$(".hbanner li iframe,.hbanner li video").css("height",o),$(".hbanner li img,.hbanner li iframe,.hbanner li video").css("width",e),$(".hbanner li").css("max-height",i)});var stickyOffset=$("nav").offset().top;$(window).scroll(function(){$(window).width()>960&&(scroll=$(window).scrollTop(),scroll>=stickyOffset?($(".innerBanner").addClass("fixedBanner"),$(".pageNavigation").addClass("fixedPageNav"),$(".serviceNav").addClass("fixedServiceNav")):($(".down-arrow").fadeIn(500),$(".innerBanner").removeClass("fixedBanner"),$(".pageNavigation").removeClass("fixedPageNav"),$(".serviceNav").removeClass("fixedServiceNav")))}),$(".menuIcon").click(function(){$("nav.mobile").slideToggle(),$(".menuIcon").toggleClass("open")}),$(document).ready(function(){$("#ladies").mouseenter(function(){$(".imgLadies").show(),$(".imgGents").hide()}),$("#ladies").mouseleave(function(){$(".imgLadies").show(),$(".imgGents").hide()}),$("#gents").mouseenter(function(){$(".imgLadies").hide(),$(".imgGents").show()}),$("#gents").mouseleave(function(){$(".imgLadies").show(),$(".imgGents").hide()}),$(".hslider").bxSlider({speed:1200,auto:!0,pause:8e3,pager:!0,preloadImages:"visible",controls:!0}),$(".hpartner").bxSlider({speed:1200,auto:!0,pause:1e3,pager:!1,preloadImages:"visible",controls:!0,minSlides:1,maxSlides:4,slideWidth:210,slideMargin:50}),$(".locateSlider").bxSlider({speed:1200,auto:!0,pause:8e3,pager:!1,preloadImages:"visible",controls:!0}),$(".academySlider").bxSlider({speed:1200,auto:!0,pause:8e3,pager:!1,preloadImages:"visible",controls:!1,mode:"fade"});var e=window.location.href;""==e&&(e="index.htm"),$("nav ul li").each(function(){$(this).find("a").attr("href")==e&&$(this).find("a").addClass("on")});var i=$(".topfixed").height();$(window).height()-200,$(".hbanner").css("margin-top",i),$(".down-arrow").click(function(){var e=$(".homeBanner").offset().top;$("html, body").animate({scrollTop:e-30},900);var i=$("#vid").get(0);return i.paused===!1&&(i.pause(),$(".playpause").toggleClass("stopVideo")),!1}),$(".playpause").click(function(){var e=$("#videoSm").get(0);return e.paused===!1?(e.pause(),$(this).toggleClass("stopVideo")):(e.play(),$(this).toggleClass("stopVideo")),!1})}),$(window).load(function(){$(".loading").hide(),$(".down-arrow").show(1e4)}),$(window).resize(function(){$(window).width()>960&&($("nav.mobile").hide(),$(".menuIcon").removeClass("open"))}),$(document).ready(function(){$(window).width()>1024&&($("video").prop("muted",!0),$("#mute-video").click(function(){$("video").prop("muted")?($("video").prop("muted",!1),$(this).addClass("on")):($("video").prop("muted",!0),$(this).removeClass("on"))})),$(".videoBtn").click(function(){var e=$(".hbanner").offset().top;$(window).width()>900?$("html, body").animate({scrollTop:e-84},900):$("html, body").animate({scrollTop:e},900),$("video").prop("muted",!0),$("video").trigger("pause"),$(".playpause").removeClass("stopVideo")}),document.body.clientWidth<=1024?($("video").attr("autoplay",!1),$(".videoBox").css("height",$(window).height()-82)):$(".videoBox").css("height",$(window).height()-82),$(window).scroll(function(){$(this).scrollTop()>$(".videoBox").height()-84?($("video").trigger("pause"),$(".playpause").removeClass("stopVideo")):($("video").trigger("play"),$('.playpause').addClass('stopVideo'),$("video").prop("muted",!1))})});