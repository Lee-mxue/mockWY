//引入模板
var tplIndex = require('../templates/index.string');
//引入自定义方法
var method = require('../method/fn.js');

//定义视图
SPA.defineView('index',{
	//装载HTML模板
	html : tplIndex,
	
	//载入插件列表
	//delegate 实现tab事件的绑定
	plugins : ['delegated'],
	
	//定义子视图
	modules : 
	[{
		name : 'content',//子视图的名字，用作后边引用的句柄
		views : ['news','read','play','search','my'],//定义子视图的列表数组
		defaultTag : 'news',//定义默认视图
		container : '.l-container'//子视图的容器
		
	}],
	
	//绑定tab事件
	bindActions : {
		'switch.tabs' : function(e,data){
			//设置当前tab 高亮
			console.log(e)
//			e.el指当前元素
			//对应tab添加.active
			method.setFocus(e.el)
			
			//切换子视图
			console.log(data)
			this.modules.content.launch(data.tag);
		}
	}
	
	
	
	
	
});
