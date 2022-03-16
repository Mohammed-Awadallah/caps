'use strict';
const events = require('./src/events');
require('./src/lib/driver');
require('./src/lib/vendor');
require('./src/caps')
events.on('create-order', createOrder);
function createOrder(payload) {
      setInterval(() => {
        events.emit('pickup', { phonyData: payload.phonyData }); 
      }, 2000);
      setInterval(() => {
        events.emit('in-transit', { phonyData: payload.phonyData });
      }, 3000)
      setInterval(() => {
        events.emit('delivered', { phonyData: payload.phonyData });
      },4000)

}