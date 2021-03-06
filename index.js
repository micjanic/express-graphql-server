const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { graphql, buildSchema } = require('graphql');
 
const schema = buildSchema(`
  type Query {
    hello: String
    getPost: Post
  }

  type Post {
    id: Int
    title: String
  }
`);
 
const root = { 
  hello: () => 'Hello world!',
  getPost: () => ({
    id:1,
    title: 'hello world'
  })
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000);