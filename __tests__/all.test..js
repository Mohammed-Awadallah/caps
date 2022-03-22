'use strict';
const port = 3000;
const io = require('socket.io')(port);
const { faker } = require('@faker-js/faker');

let socketObj ={};
let data = {
    store: "my store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};

let consoleSpy;
beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
})

afterAll(() =>{
consoleSpy.mockRestore();
})
describe('testing the connection ',()=>{


  it('testing the client connection',async()=>{
        io.emit('connection',socketObj);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

})

describe('testing the server (caps)', () => {
    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    it('pickup emiting', async () => {
        io.emit('pickup',data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('in-transit emiting', async () => {
        io.emit('in-transit',data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('delivered emiting', async () => {
        io.emit('delivered',data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

})
























































