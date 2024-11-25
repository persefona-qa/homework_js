const http = require("http");

http.createServer(function (request, response) {
    const url = request.url;


    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Welcome to the new Server!\n');
    } else if (url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('This is a simple http Node.js server\n');
    } else if (url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Contact us at contact@newserver.com\n');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page not found!\n');
    }
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
