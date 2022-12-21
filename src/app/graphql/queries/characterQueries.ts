import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        pages
        next
        prev
        count
      }
    }
  }
`

export {GET_CHARACTERS}