'use strict';
const events = require('./src/events');
require('./src/lib/driver');
require('./src/lib/vendor');
require('./src/caps')
events.on('create-order', createOrder);
function createOrder(payload) {
    events.emit('pickup', { phonyData: payload.phonyData });
    events.emit('in-transit', { phonyData: payload.phonyData });
    events.emit('delivered', { phonyData: payload.phonyData });
}