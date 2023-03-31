import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
query AllBooks {
  allBooks {
    books {
      id
			title
      author
      date
      coverImage
      collect
      createdAt
      updatedAt
      }
    }
	}`
;
