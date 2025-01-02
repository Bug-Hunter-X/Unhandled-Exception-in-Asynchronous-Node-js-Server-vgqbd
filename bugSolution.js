const http = require('http');

const server = http.createServer((req, res) => {
  // Wrap the asynchronous operation in a try...catch block
  setTimeout(() => {
    try {
      if (req.url === '/error') {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
      }
    } catch (err) {
      console.error('Request handler error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 1000); 
});

//Use process.on('uncaughtException') for global error handling (generally discouraged)
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});