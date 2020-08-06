// import the gpl tagged template function
const { gql } = require('apollo-server-express');

// create our typDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;