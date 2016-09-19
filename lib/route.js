
var parseUrl = require('url').parse;


var routes = {get:[],post:[],head:[],put:[],delete:[]};

exports.map = function (dict){
	if(dict && dict.url && dict.controller){
		var method = dict.method ? dict.method.toLowerCase() : 'get';
		routes[method].push({
			url:dict.url,
			controller:dict.controller,
			action:dict.action || 'index',
			regExp:compileUrl(dict)
		});
	}
};

//{controller}/{action}/(id)
exports.getRouteInfo = function (url, method){

	var method = method ? method.toLowerCase() : 'get',
	pathname = parseUrl(url).pathname;

	var route = routes[method];

	for (var i in route) {

		var curRoute = route[i];

		var r = curRoute.regExp.exec(pathname);

		if(r){
			r.shift();
			return {
				controller: curRoute.controller,
				action : curRoute.action,
				args :r
			}
		}
	}
}

var compileUrl = function (dict){

	var url = dict.url.replace('{controller}',dict.controller)
	.replace('{action}',dict.action);

	var urlArray = url.split('/');

	var str = '';
	for (var i = 0; i < urlArray.length; i++) {
		var item = urlArray[i];

		str += i <2 ?item + '\/' : item;
	}

	return new RegExp(str,'i');
}