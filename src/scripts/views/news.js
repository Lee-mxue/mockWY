var tplNews = require('../templates/news.string');

var method = require('../method/fn.js');

SPA.defineView('news',{
	html : tplNews,
	
	//初始化
	init : {
		newsSwiper : null,
		bannerSwiper : null,
		//定义
		vm :null
	},
	//载入插件列表
	//delegate 实现tab事件的绑定
	plugins : ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
    }
  }],
	
	//绑定子视图事件
	bindActions : {
		'tap.newsnav.slide' : function(e,data){
			this.newsSwiper.slideTo($(e.el).index())
//			console.log($(e.el).index())		
		},
		//模态窗
		'tap.newsnavgation' : function(){
			SPA.open('newsnavgation',{
				ani :{
					name : 'dialog',
				    autoHide: true,
				    width: 300,
				    height: 300
				}
			})
		}
	},
	
	
	//绑定视图事件
	bindEvents: {
		
		'beforeShow' : function(){
			//将当前视图对象存入变量    方便之后调用
			var _this = this;
			
			//获取VM对象
			_this.vm = _this.getVM();
			
			//定义ajax对象 从给定接口调取数据
			$.ajax({
				//定义接口
				url : '/api/getNewslist.php',
				//定义方式
				type : 'get',
				//向后台传递参数 方便后台判断来返回所需数据
				data : {
					//自己定义    
					rtype : 'origin'
				},
				success : function (rs) {
//					console.log(rs.data);
					_this.vm.newslist = rs.data
				}
			});		
		},
		
		//show在document.ready后触发
		'show' : function () {
			//this指当前视图
			
			//导航部分横向滚动
			var newsnavScroll = this.widgets['newsnav-scroll'];
//			console.log(newsnavScroll);
			newsnavScroll.options.scrollX = true;
			newsnavScroll.options.scrollY = false;
					
			//新闻页swiper切换
			this.newsSwiper = new Swiper('#news-swiper',{
				loop : false,
				//swiper切换开始触发
				onSlideChangeStart : function(swiper){
//					console.log(swiper);
					//获取当前元素下标
					var index = swiper.activeIndex;
					var $lis = $('nav ul li');
					//setFocus是自定义的方法 给当前元素添加class名active
					method.setFocus($lis.eq(index));
				}
			}),
			
			//新闻页banner切换
			this.bannerSwiper = new Swiper('#banner-swiper',{
				loop : true,
				autoplay : 2000,
				pagination : '.swiper-pagination'
			})
			
			
			
		}
	}
});
