// ROUTING

const http = require('http');
const fs = require('fs');

const port = 4444;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
switch (true) {
    case req.url === "/" && req.method === "GET":
        fs.readFile('./views/index.html', (err, data) => {
            res.setHeader('content-type', 'text/html; charset=UTF-8');
            res.writeHead(200);
            res.end(data);
        });
        break;
    case req.url === "/favicon.ico" && req.method === "GET":
        fs.readFile('./favicon.ico', (err, data) => {
            res.setHeader('content-type', 'image/ico');
            res.writeHead(200);
            res.end(data);
        });
    case req.url === "/script.js" && req.method === "GET":
        fs.readFile('./public/script.js', (err, data) => {
            res.setHeader('content-type', 'application/javascript');
            res.writeHead(200);
            res.end(data);
        });
        break;

    default:
        fs.readFile("/views/hiba.html", (err, file) => {
            res.setHeader('content-Type', 'text/html;charset=UTF-8');
            res.writeHead(404);
            res.end(file);
        });
        break;
}
});

server.listen(port);