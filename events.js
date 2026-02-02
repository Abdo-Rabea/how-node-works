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
