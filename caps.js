'use strict';
const events = require('./events.js');
require('./lib/vendor/vendor.js');
require('./lib/driver/driver.js');
events.on('EVENT', (payload) => {//on is for listening
  events.emit('pickup', { order: payload });

});