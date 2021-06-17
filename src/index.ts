import { PrismaClient } from '@prisma/client'
import { Community, Profile, Group, Event, User } from ".prisma/client"

import { ApolloServer, ResolverFn } from 'apollo-server'

const prisma = new PrismaClient()

const typeDefs = JSON.stringify({ Community, Profile, Group, Event, User});

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    }
  }
};

// Context
const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port: 3000 });
