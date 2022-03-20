'use strict';
const {faker} = require('@faker-js/faker');
const events = require('../../events.js');
events.on('pickup', pickUp);
events.on('in-transit', inTransit);
events.on('delivered', delivered);
let order ={};
setInterval(() => {
    order = {
        store: "ASAC STORE",
        orderID: faker.phone.phoneNumber(),
        customer: faker.name.findName(),
        address: `${faker.address.cityName()}, ${faker.address.countryCode()}`,
    }
    events.emit('EVENT', order);
}, 3000);
setInterval(() => {
    events.emit('in-transit', order);
}, 4000);
setInterval(() => {
    events.emit('delivered', order);
}, 5000);

function pickUp(payload){
  let event = {
    event : 'pickup',
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT', event);
}
function inTransit(payload){
    let event = {
      event : 'in-transit',
      time: new Date(),
      payload: payload,
    };
    console.log('EVENT', event);
}
function delivered(payload){
    let event = {
      event : 'delivered',
      time: new Date(),
      payload: payload,
    };
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`); 
    console.log('EVENT', event);
}