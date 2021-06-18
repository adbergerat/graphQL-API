import { PrismaClient } from '@prisma/client'
import { Community, Profile, Group, Event, User } from ".prisma/client"

import { ApolloServer, ResolverFn } from 'apollo-server'

const prisma = new PrismaClient()

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    createUser: () => {
      return prisma.user.findMany();
    }
  }
};

// Context
const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port: 3000 });
