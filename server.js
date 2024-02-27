

// server.js

const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello Node!!!!</h1>\n');
    response.end();
});

server.listen(3000, () => {   
    console.log('Server running on port 3000');
});

