const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose')

// Uso do Docker para rodar uma imagem MongoDB
mongoose.connect('http://localhost:27017/testegraphql', {
  useNewUrlParser: true,
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start();

// # Criando base do servidor graphql, e configs especificas que graphql precisa.