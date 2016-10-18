const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hi evryone\n');
    } else if(req.url === '/search')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('I can help to find whatever you want:)\n');
	} else if(req.url === '/search/math')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('What topic of math are you interested in?\n');
	} else if(req.url === '/search/math/algebra')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Here is information about algebra\n');
	} else if(req.url === '/search/math/geometry')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Here is information about geometry\n');
	} else
	{
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Sorry, something is wrong!");
    }
});

httpServer.listen(2016);