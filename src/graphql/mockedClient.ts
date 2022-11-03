import { faker } from "@faker-js/faker";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { asyncMap } from "@apollo/client/utilities";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import schemaString from "src/graphql/codegen/schema.graphql";
// import { Resolvers } from "./codegen/resolvers-types";

export default function getMockedClient(delay = 0) {
  let client: ApolloClient<NormalizedCacheObject>;

  const schema = makeExecutableSchema({
    typeDefs: schemaString,
    // resolvers,
  });
  const mocks = {
    // General Types
    ID: () => faker.datatype.number(),
    Int: () => faker.datatype.number(),
    Float: () => faker.datatype.float(),
    String: () => faker.lorem.words(),
    DateTime: () => faker.date.soon(10),
    // Specific Objects
    Home: () => ({
      title: () => "Home",
      content: () => faker.lorem.paragraph(),
    }),
    Page: () => ({
      title: () => faker.lorem.word(),
      content: () => faker.lorem.paragraph(),
      slug: () => "page-slug",
    }),
  };
  const preserveResolvers = true;
  const schemaWithMocks = addMocksToSchema({
    schema,
    mocks,
    preserveResolvers,
  });
  const schemaLink = new SchemaLink({ schema: schemaWithMocks });

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const mockDelayMiddleware = new ApolloLink((operation, forward) => {
    return asyncMap(forward(operation), async (response) => {
      await timeout(delay);
      return response;
    });
  });

  client = new ApolloClient({
    cache: new InMemoryCache(),
    link: mockDelayMiddleware.concat(schemaLink),
  });

  return client;
}
