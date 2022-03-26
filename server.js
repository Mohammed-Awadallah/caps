'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const uuid = require('uuid').v4;
// const server = io.of('/caps');
const queue = {
  'acme-widgets': {},
  '1-206-flowers': {},
}
io.on('connection', socket => {
  console.log('connected to', socket.id);
  console.log("baanananananananan");
  socket.on('pickup', payload => {
    let store = payload.store;
    let id = uuid();
    queue[store][id] = payload;
    console.log('current queue:', queue); 
    io.emit(('pickup', {id, payload}));
  })
  socket.on('inTransit', payload => {
    io.emit('inTransit', payload)
  })
  socket.on('delivered', payload => {
    io.emit('delivered', payload)
  })
  socket.on('getAll', payload => { 
    Object.keys(queue[payload]).forEach((id) => { 
      io.emit('message', { payload: queue[payload][id]});
    })
  })
  socket.on('received', payload => {
    let store = payload.payload.store;
    let orderId = payload.id; 
    console.log('current queue', queue[store][orderId]);
    delete queue[store][orderId]; 
  })
})