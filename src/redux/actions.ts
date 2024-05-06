import { Character, Film } from "../model";
export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const ADD_ACTIVE_CHARACTER = 'ADD_ACTIVE_CHARACTER';
export const ADD_FILM_COLLECTION = 'ADD_FILM_COLLECTION';
export const ADD_FILM = 'ADD_FILM';

export interface CharactersAction {
    type: typeof ADD_CHARACTERS,
    payload: string[]
}

export interface ActiveCharacterAction {
    type: typeof ADD_ACTIVE_CHARACTER;
    payload: Character;
}

export interface FilmCollectionAction {
    type: typeof ADD_FILM_COLLECTION;
    payload: Film[];
}

export interface FilmAction {
    type: typeof ADD_FILM,
    payload: Film
}

export const addCharacters = (characters: string[]) => ({
  type: ADD_CHARACTERS,
  payload: characters
});

export const addActiveCharacter = (character: Character) => ({
  type: ADD_ACTIVE_CHARACTER,
  payload: character
});

export const addFilmCollection = (films: Film[]) => ({
    type: ADD_FILM_COLLECTION,
    payload: films
});

export const addFilm = (film: Film) => ({
  type: ADD_FILM,
  payload: film
});

