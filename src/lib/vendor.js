'use strict';

const events = require('../events');
let {faker} = require('@faker-js/faker');

let phonyData = {
    "store":  "ASAC STORE",
    "orderId": faker.phone.phoneNumber(),
    "customer":faker.name.findName(),
    "address": faker.address.streetAddress()
}

events.on('deliveredVendor', deliveredVendor);

function deliveredVendor(payload) {
    console.log('VENDOR: Thank you  for delivering', payload.phonyData.orderId);
    events.emit('deliveredEvent', { phonyData: payload.phonyData });
}

setInterval(() => {
console.log('===============================');
events.emit('create-order', { phonyData });
console.log('===============================');
}, 3000);



