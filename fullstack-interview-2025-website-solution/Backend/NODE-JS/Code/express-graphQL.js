const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User { id: ID, name: String }
  type Query { user(id: ID!): User }
`);

const root = {
  user: ({ id }) => ({ id, name: "Alice" }),
};

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.listen(4000, () => console.log("GraphQL server running on port 4000"));

// EXAMPLE;
// REST examples (1-liner each):
app.get("/users", (req, res) => res.json(users)); // Read
app.post("/users", (req, res) => res.json(req.body)); // Create
app.put("/users/:id", (req, res) => res.json(req.body)); // Update
app.delete("/users/:id", (req, res) => res.sendStatus(204)); // Delete

// GraphQL example (1-liner query & mutation): graphql file
// query { user(id: "1") { id, name } }       # Read
// mutation { addUser(name: "Alice") { id } } # Create/Update
