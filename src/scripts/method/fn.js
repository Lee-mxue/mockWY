


//定义方法(字面量)
var Method = {
	setFocus : function(e){
		$(e).addClass('active').siblings().removeClass('active')
	}
};


//暴露接口
module.exports = Method;