import { ApolloServer } from 'apollo-server'
import { schema } from '../api/schema'

export const server = new ApolloServer({schema})