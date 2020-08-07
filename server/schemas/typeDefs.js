// import the gpl tagged template function
const { gql } = require('apollo-server-express');

// create our typDefs
const typeDefs = gql`

type Auth {
    token: String
    user: [User]
}

type Book {
    bookId: String
    authors: [String] 
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: [User]
  }

`;

// export the typeDefs
module.exports = typeDefs;