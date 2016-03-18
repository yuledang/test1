/*
	插件功能：简单表单提交
	版本：1.0
	作者：空中幻化
	参数说明
		表单本体
		用户名
		密码
		手机号码
		邮箱
		提交按钮
		错误提示语
*/

;(function($){
	$.fn.extend({
		regs:function(option){
			defaults={
				form:"#reg_form",
				name:"#name",
				pwd:"#pwd",
				num:"#num",
				mail:"#mail",
				sub:"#sub",
				reg_length:"过长或者过短",
				r_name:"请重新输入用户名,正常字符",
				r_pwd:"请重新输入密码",
				r_num:"请重新输入电话",
				r_mail:"请重新输入邮箱"
			}
			opts=$.extend({},defaults,option);

			$(opts.name).on("blur",function(){
				var _name = $(this).val();
				var re = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
				var resault = re.test(_name);
				console.log(_name.length)
				if(_name.length>0){
					if(_name.length<6 || _name.length>16){
						$(this).siblings().text(opts.reg_length)
					}else if(!resault){
						$(this).siblings().text(opts.r_name)
					}else{
						$(this).siblings().text("");
					}
				}
			})

			$(opts.pwd).on("blur",function(){
				var _pwd = $(this).val();
				var re = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
				var resault = re.test(_pwd);
				console.log(_pwd.length)
				if(_pwd.length>0){
					if(_pwd.length<6 || _pwd.length>16){
						$(this).siblings().text(opts.reg_length)
					}else if(!resault){
						$(this).siblings().text(opts.r_pwd)
					}else{
						$(this).siblings().text("");
					}
				}
			})

			$(opts.num).on("blur",function(){
				var _num = $(this).val();
				var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
				var resault = re.test(_num);
				console.log(_num.length)
				if(_num.length>0){
					if(!resault){
						$(this).siblings().text(opts.r_num)
					}else{
						$(this).siblings().text("");
					}
				}
			})

			$(opts.mail).on("blur",function(){
				var _mail = $(this).val();
				var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
				var resault = re.test(_mail);
				console.log(_mail.length)
				if(_mail.length>0){
					if(!resault){
						$(this).siblings().text(opts.r_mail)
					}else{
						$(this).siblings().text("");
					}
				}
			})

			$(opts.sub).on("click",function(){
				if ($(opts.name).val()==0) {
					$(opts.name).siblings().text(opts.r_name)
				}
				if($(opts.pwd).val()==0){
					$(opts.pwd).siblings().text(opts.r_pwd)
				}
				if($(opts.num).val()==0){
					$(opts.num).siblings().text(opts.r_num)
				}
				if($(opts.mail).val()==0){
					$(opts.mail).siblings().text(opts.r_mail)
				}
			})

			return this.each(function(i,el){
				
			})

		}
	})
})(jQuery);;