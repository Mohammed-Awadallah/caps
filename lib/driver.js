"use strict";

const io = require("socket.io-client");
const host = "http://localhost:3000";
const caps = io.connect(host);
caps.on("pickup", (payload) => {
  console.log(`DRIVER: Picked up ${payload.orderId}`);
    setTimeout(() => {
        console.log('DRIVER : The order is being transported');
        caps.emit("in-transit", payload);
    }, 2000);
    setTimeout(() => {
        caps.emit('delivered',payload)
        console.log(`DRIVER: delivered up ${payload.orderId}`);
    }, 2000);
});
