'use strict';
const events = require('../../events.js');
events.on('pickup', pickUp);
// events.on('delivered', delivered);
function pickUp(payload){
    console.log(`DRIVER: picked up ${payload.orderID}`);
    setTimeout(() => {
      events.emit('in-transit', payload);

    }, 2000);
    setTimeout(() => {
      console.log(`DRIVER: delivered up ${payload.orderID}`);
      events.emit('delivered', payload);
    }, 2000);
    
  }
  // function delivered(payload){
  //   console.log(`DRIVER: delivered up ${payload.orderID}`); 
  // }


  // the driver should listen to pick up event , should emit the in transit event and delivered event