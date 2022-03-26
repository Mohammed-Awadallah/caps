'use strict'
// require('dotenv').config();
const io = require('socket.io-client');
const SERVER_URL = 'http://localhost:3000';

const socket = io.connect(SERVER_URL);

socket.on('pickup', payload => {
  setInterval(() => {
    socket.emit('in-transit', payload)
    console.log(`picking up ${payload.orderID}`)
  }, 1500);
  setInterval(() => {
    socket.emit('delivered', payload)
    console.log('Package left at front door')
  }, 3000);
})