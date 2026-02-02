// creating my custom event

const EventEmitter = require('events');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const salesEmitter = new Sales();

// 1. listen for the events
salesEmitter.on('new-sale', () => {
  console.log('new sale 💥');
});
salesEmitter.on('new-sale', (arg) => {
  console.log('new sale 💥 ' + arg);
});

salesEmitter.emit('new-sale', 8);

// HTTP server test events
const http = require('http');
const server = http.createServer();
//* the server emits event named request whenever there a request hits the server
server.on('request', (req, res) => {
  res.end('hello world');
});
server.on('request', (req, res) => {
  console.log(req.url);
  console.log('hello there');
});

// you should listen
server.listen(8000, '127.0.0.1');
