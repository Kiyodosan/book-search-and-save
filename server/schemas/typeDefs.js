const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    self: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # removeUser: User
    # //// Does authors need to be an array?
    addBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;