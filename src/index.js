const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  const { url } = await server.listen();
  console.log(`🚀🚀 server running on ${url}`);
};

start();
