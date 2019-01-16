// Import GraphQL Yoga server -- express server
const { GraphQLServer } = require('graphql-yoga');

// Resolvers answer the question where does the data come from or what does this data do in the db
// Query resolvers - pull data
// Mutation resolvers - push data
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const db = require('./db');

// Create the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation, 
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // Access database from resolvers
    context: req => ({...req, db}),
  });
}

module.exports = createServer;
