'use strict';
const {faker} = require('@faker-js/faker')
const io = require('socket.io-client'); 
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const socket = io.connect(SERVER_URL);
const store = '1-800-flowers';
socket.emit('join', store);
const store1 = 'acme-widgets';
const store2 = '1-206-flowers';
socket.on('delivered', payload => {
  console.log(`thank you for delivering ${payload.orderID}`)
})
setInterval(() => {
  let pckg = {
    store: store1,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  socket.emit('pickup', pckg);
}, 3000);
setInterval(() => {
  let pckg = {
    store: store2,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  }
  socket.emit('pickup', pckg);
}, 3000);