/*
	插件功能：实现图片切换
	版本：1.0
	作者：空中幻化
	参数说明：
		图片本体
		定制事件:默认鼠标滑过
		是否自动播放:true/false
		切换目标:
		设置默认索引:0
		动画效果:left|top
		定时器播放时间:2000
		动画播放速度
*/


;(function($){
	$.fn.extend({
		tpchange:function(option){
			var defaults={
				pic:".pic",
				evt:"mouseover",   //定制事件:默认鼠标滑过
				autoplay:true,    //是否自动播放:true/false
				target:".code",    //切换目标:
				idx:0,			   //设置默认索引:0
				direction:'opacitys',   //动画方向:left|top
				time:1000,		   //定时器播放时间:2000
				speed:300,		   //动画播放速度
			}
			opts=$.extend({},defaults,option);
			var btn=$(opts.target).children()[0].tagName,
				h=$(opts.pic).find("img").height(),
				w=$(opts.pic).find("img").width(),
				len=$(opts.target).find("li").length;
				console.log(len)

			if (opts.direction=="left") {
				$(opts.pic).css("width",$(opts.target).find("li").length*$(opts.pic).find("img").width()).find("img").css("float","left");
				$(opts.target+" "+btn).on(opts.evt,function(){
					clearInterval(timer);
					$(this).css("background","blue").siblings().css("background","red");
						index=$(this).index();
						opts.idx=$(this).index();
					$(opts.pic).css("margin-left","-"+index*w+"px")
				})
				$(opts.target+" "+btn).on("mouseout",function(){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).css("margin-left","-"+opts.idx*w+"px");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				})
				if(opts.autoplay){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).css("margin-left","-"+opts.idx*w+"px");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				}
			}

			if(opts.direction=="opacitys"){
				$(opts.pic).css("position","relative").find("img").css("position","absolute").css("top","0px").css("left","0px");
				$(opts.pic).children().eq(0).css("opacity","1").siblings().css("opacity","0");
				$(opts.target+" "+btn).on(opts.evt,function(){
					clearInterval(timer);
					$(this).css("background","blue").siblings().css("background","red");
					index=$(this).index();
					opts.idx=$(this).index();
					console.log($(opts.pic).children().eq(index));
					$(opts.pic).children().eq(index).css("opacity","1").siblings().css("opacity","0");
				})

			*$(opts.target+" "+btn).on("mouseout",function(){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).children().eq(opts.idx).css("opacity","1").siblings().css("opacity","0");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				})
				if(opts.autoplay){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).children().eq(opts.idx).css("opacity","1").siblings().css("opacity","0");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				}
			}

			if (opts.direction=="top") {
				$(opts.pic).css("height",$(opts.target).find("li").length*$(opts.pic).find("img").height());
				$(opts.target+" "+btn).on(opts.evt,function(){
					clearInterval(timer);
					$(this).css("background","blue").siblings().css("background","red");
					var index=$(this).index();
					opts.idx=$(this).index();
					$(opts.pic).css("margin-top","-"+index*h+"px")
				})
				
				$(opts.target+" "+btn).on("mouseout",function(){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).css("margin-top","-"+opts.idx*h+"px");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				})
				if(opts.autoplay){
					timer=setInterval(function(){
						$(opts.target).children().eq(opts.idx).css("background","blue").siblings().css("background","red");
						$(opts.pic).css("margin-top","-"+opts.idx*h+"px");
						opts.idx++;
						if (opts.idx>len-1) {
							opts.idx=0;
						}
					},opts.time);
				}
			}
			return this.each(function(i,el){
			})
		}
	})
})(jQuery);;
