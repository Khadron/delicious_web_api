
exports.helloworld = function (){

	// this.renderJson({"say":"hello world!"});
	this.renderXml("<?xml version='1.0' encoding='ISO-8859-1'?>"+
		"<note><message>Hello world !</message></note>");
};