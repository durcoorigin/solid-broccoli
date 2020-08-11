import gql from 'graphql-tag';

export const GET_ME = gql`
  query me($username: String) {
    me(username: $username) {
      _id
      username
      createdAt
      email
      bookCount
      savedBooks
    }
  }
`;