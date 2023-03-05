require('debug').enable('app:*')
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

async function startServer() {
  await server.start();

  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../client/public')));

  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

startServer();
