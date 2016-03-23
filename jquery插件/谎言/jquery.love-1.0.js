/*
	插件功能：程序员撩妹
	版本：1.0
	作者：空中幻化
	参数说明
		头部字
		中间字
		对方
		自己
		时间
		文字出现速度
*/

;(function($){
	$.fn.extend({
		lovely:function(option){
			var defaults={
				hearder_s:"",
				text:"",
				people:"",
				"myself":"",
				"time":"",
				"speed":"100",
				heardert:"#header_s",
				maintxt:"#main_txt",
				footer:"#foot_ers",
				way:"#way"
			},
			opts=$.extend({},defaults,option);
			var i=0;
			$(opts.heardert).append(opts.hearder_s);
			$(opts.maintxt).append("&nbsp;&nbsp;&nbsp;&nbsp;");
			$(opts.footer).append(opts.myself+" "+opts.time);
			$(opts.way).append(opts.people);
			
			var lovetxt = opts.text;
			var lovetext= lovetxt.split("");
			$.each(lovetext,function(i,n){
				var str1="<label style='opacity:0'>"+n+"</label>";
				$(opts.maintxt).append(str1);
			})

			timer1=setInterval(function(){
				$(opts.heardert).css("opacity","1");
				$(opts.maintxt+" "+"label").eq(i).css("opacity","1");
				i++
				$(opts.way).css("opacity","1");
				$(opts.footer).css("opacity","1");
				
			},opts.speed)

			return this.each(function(i,el){
			})

		}
	})
})(jQuery);