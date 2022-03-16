'use strict';

const events = require('../events');
// let faker = require('faker');

let phonyData = {
    "store":  "ibrahim for everything",
    "orderId": "1234567891011",
    "customer": "ASAC",
    "address": "skhsdkhkhsgk"
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



