"use strict";
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const hub = require("socket.io")(PORT);
// const caps = hub.of("/caps");
// hub.on("connection", (socket) => {
//   console.log("CONNECTED", socket.id);
// });
hub.on("connection", (socket) => {
  console.log("connected on", socket.id);
  socket.on("pickup", (payload) => {
    pickup(payload);
    hub.emit('pickup' , payload);
  });
  socket.on("in-transit", (payload) => {
    inTransit(payload);
  });
  socket.on("delivered", (payload) => {
    delivered(payload);
      socket.emit('delivered' , payload);
  });
});
function delivered(payload) {
  let date = new Date();
  let deliveredEvent = {
    event: "delivered",
    time: date.toString(),
    payload: payload,
  };
  console.log("EVENT", deliveredEvent);
}
function inTransit(payload) {
  let date = new Date();
  let inTRansitEvent = {
    event: "in-transit",
    time: date.toString(),
    payload: payload,
  };
  console.log("EVENT", inTRansitEvent);
}
function pickup(payload) {
  let date = new Date();
  let pickupEvent = {
    event: "pickup",
    time: date.toString(),
    payload: payload,
  };
  console.log("EVENT", pickupEvent);
}