/*
	插件功能：三级联动
	版本：1.0
	作者：空中幻化
	参数说明
		联动数据地址
		获取数据方式
		select1
*/

;(function($){
	$.fn.extend({
		liandong:function(option){
			var defaults={
				url:"data.json",
				dataType:"get",
				op1:"#sel1"
			}
			opts=$.extend({},defaults,option);
			$.ajax({
				url:opts.url,
				dataType:"json"  ,
				type:opts.dataType,
				success:function(data){
					DATA = data;
					//填充1
					$.each(data["province"],function(i,n){
						str="<option value="+n["id"]+">"+n["name"]+"</option>";
						$(opts.op1).append(str);
					})
					//填充2
					$(opts.op1).change(function(){
						$(this).next().html("<option>请选择</option>")
						$index=$(this).val();
						$.each(DATA["city"],function(i,n){
							if (n["cid"]==$index) {
								str="<option value="+n["id"]+">"+n["name"]+"</option>";
								$(opts.op1).next().append(str);
							}
						})
					})
					$(opts.op1).next().change(function(){
						$(this).next().html("<option>请选择</option>")
						$index=$(this).val();
						$.each(DATA["county"],function(i,n){
							if (n["cid"]==$index) {
								str="<option value="+n["id"]+">"+n["name"]+"</option>";
								$(opts.op1).next().next().append(str);
							}
						})
					})	
				}		
			})
			return this.each(function(i,el){
			})
		}
	})
})(jQuery);;