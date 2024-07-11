const mongoose = require('mongoose')

describe('MongoDB connection',()=>{
    beforeAll(async ()=>{
        const url= 'mongodb+srv://poojithasiliveru2003:w4hoWDShRcP9qNgk@cluster0.pt3mqlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(url);
    });
    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});