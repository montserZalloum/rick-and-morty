export interface ICharacter {
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