const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const app = express();
const port = 3001;
const url='mongodb+srv://poojithasiliveru2003:w4hoWDShRcP9qNgk@cluster0.pt3mqlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('Mongo DB connected'); }).catch((err) => console.log(err));
const server = new ApolloServer({ typeDefs, resolvers });

async function StartServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server live at ${port}`);
  });
}
StartServer();