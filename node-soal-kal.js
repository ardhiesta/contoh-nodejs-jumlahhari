var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	/*Use the url module to turn the querystring into an object:*/
	var q = url.parse(req.url, true).query;
	
	/*Return the year and month from the query object:*/
	var hari = '';
	
	var bulan = q.month;

	if(bulan === "januari")
		hari = "31 hari";
	else if(bulan === "februari")
		hari = "28 hari";
	else if(bulan === "maret")
		hari = "31 hari";
	else if(bulan === "april")
		hari = "30 hari";
	else if(bulan === "mei")
		hari = "31 hari";
	else if(bulan === "juni")
		hari = "30 hari";
	else if(bulan === "juli")
		hari = "31 hari";
	else if(bulan === "agustus")
		hari = "31 hari";
	else if(bulan === "september")
		hari = "30 hari";
	else if(bulan === "oktober")
		hari = "31 hari";
	else if(bulan === "november")
		hari = "30 hari";
	else if(bulan === "desember")
		hari = "31 hari";
		
	var txt = q.year + " " + q.month + " " + hari;
	res.end(txt);
}).listen(8080);

