

var router = require('./lib/route');
/*
路由规则：
{controller}/{action}/(args)
其中args必须用括号包起来，特殊字符记得转义
*/
router.map({
	method:'get',
	url:'{controller}/{action}/(\\d)',
	controller:'Home',
	action:'helloworld'
});

exports.staticFileDir = 'static';