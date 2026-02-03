const fs = require('fs');
const server = require('http').createServer();

// reading file using streams

server.on('request', (req, res) => {
  // solution 1: reading file using fs.readFile
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // solution 2: using streams without pipe
  // const readable = fs.createReadStream('testr-file.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('file not found');
  // });

  // solution 3: using streams with pipe
  // Automatically manages the flow of data, ensuring that the writable stream is not overwhelmed (backpressure handling).
  // The pipe() method connects a readable stream (e.g., fs.createReadStream) to a writable stream (e.g., res in your code).
  // The res object in an HTTP server is a writable stream, which is why you can pass it to pipe().

  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

// start server
server.listen(8000, '127.0.0.1', () =>
  console.log('server started on port 8000')
);
