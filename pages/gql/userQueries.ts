import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation SignupUser($input: SignUpInput!) {
    signupUser(input: $input) {
      user {
        id
        name
        email
        photo
        role
        createdAt
        updatedAt
      }
      status
    }
  }
`;