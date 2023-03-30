import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
query GetMe {
    getMe {
        status
        user {
            id
            name
            email
            photo
            role
            createdAt
            updatedAt
        }
    }
}`;
