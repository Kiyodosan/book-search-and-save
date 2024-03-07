const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: String
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
    addBook(authors: String, description: String!, bookId: String!, image: String, link: String, title: String!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

/* type Query {
  # Users
  # //// Is the ! needed after the array?
  # users: [User]!
  # user(userId: ID!): User
  self: User
  # //// Can we query for books, even though it isn't a model?
  # Books
  # //// Testing User as ref, since all books are queried per user
  # books: User
  # book(bookId: bookId!): User
} */