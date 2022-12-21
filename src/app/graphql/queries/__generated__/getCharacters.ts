/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCharacters
// ====================================================

export interface getCharacters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface getCharacters_characters_info {
  __typename: "Info";
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
  /**
   * The length of the response.
   */
  count: number | null;
}

export interface getCharacters_characters {
  __typename: "Characters";
  results: (getCharacters_characters_results | null)[] | null;
  info: getCharacters_characters_info | null;
}

export interface getCharacters {
  /**
   * Get the list of all characters
   */
  characters: getCharacters_characters | null;
}

export interface getCharactersVariables {
  page?: number | null;
}
