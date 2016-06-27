// 引入spa类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

// 引入views
require('./views/index.js');
require('./views/news.js');
require('./views/read.js');
require('./views/play.js');
require('./views/search.js');
require('./views/my.js');
require('./views/newsnavgation.js');

//SPA设置
SPA.config({
	indexView : 'index'
});
