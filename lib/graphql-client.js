const API = process.env.PUBLIC_GRAPHQL_API
import { GraphQLClient } from "graphql-request"

export const client = new GraphQLClient(API)