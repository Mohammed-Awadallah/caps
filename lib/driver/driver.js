'use strict';
const events = require('../../events.js');
events.on('pickup', pickUp);
events.on('delivered', delivered);

function pickUp(payload){
    console.log(`DRIVER: picked up ${payload.order.orderID}`);
  }
  function delivered(payload){
    console.log(`DRIVER: delivered up ${payload.orderID}`); 
  }