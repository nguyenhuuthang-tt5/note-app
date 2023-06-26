import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import 'dotenv/config'
import mongoose from 'mongoose'
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'

const app = express()

//connect to database
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@note-app-cluster.wmi006g.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

async function startServer() {
    await server.start()
    server.applyMiddleware({ app })
}
startServer()
mongoose.set('strictQuery', false)
mongoose.connect(URI, {

}).then(async () => {
    console.log('Connect Successfully');
    app.listen({port: PORT}, () => {
        console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
    })
}).catch((error) => {
    console.log(error);
})

