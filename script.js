const http = require('http');
let viewCountHome = 0;
let viewCountAbout = 0;
let viewCountError = 0;
const server = http.createServer((req, res) => {
    console.log('Response is receved');
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        viewCountHome++;
        res.end(`<a href="http://localhost:3000/about">About</a>
        <h1>Welcome to my site!</h1>
        <h2>Count of home page views: ${viewCountHome}</h2>`);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        viewCountAbout++;
        res.end(`<a href="http://localhost:3000/">Home</a>
        <h1>Welcome to my site!</h1>
        <h2>Count of about page views: ${viewCountAbout}</h2>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        viewCountError++;
        res.end(`<h1>404</h1>
        <h2>Count of 404 views: ${viewCountError}</h2></h2>`);
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});