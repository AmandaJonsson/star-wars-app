import { combineReducers } from 'redux';
import { ADD_CHARACTERS, ADD_ACTIVE_CHARACTER, CharactersAction, ActiveCharacterAction, ADD_FILM_COLLECTION, ADD_FILM, FilmAction, FilmCollectionAction} from './actions'; 
import { Character, Film } from '../model';

interface CharacterState {
  characters: string[]; 
  activeCharacter: Character | null;
}

interface FilmState {
  filmCollection: Film[];
  activeFilm: Film | null;
}

const initialCharacterState: CharacterState = {
  characters: [],
  activeCharacter: null,
};

const initialFilmState: FilmState = {
  filmCollection: [],
  activeFilm: null,
};

// Character reducer
const charactersReducer = (state: CharacterState = initialCharacterState, action: CharactersAction | ActiveCharacterAction) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      const uniqueCharacters = new Set([...state.characters, ...action.payload]);
      const uniqueCharactersArray = [...uniqueCharacters];
      return {
        ...state,
        characters: uniqueCharactersArray,
      };
      case ADD_ACTIVE_CHARACTER: 
      return {
       ...state,
        activeCharacter: action.payload,
      };
    default:
      return state;
  }
};

// Film reducer
const filmReducer = (state: FilmState = initialFilmState, action: FilmAction | FilmCollectionAction) => {
  switch (action.type) {
    case ADD_FILM_COLLECTION: 
     return {
       ...state,
        filmCollection: action.payload
     };
    case ADD_FILM:
      return {
        ...state,
        activeFilm: action.payload,
      };
    default:
      return state;
  }
};

export interface RootState {
  characters: CharacterState;
  film: FilmState;
}

// Combine reducers
export const rootReducer = combineReducers({
  characters: charactersReducer,
  film: filmReducer,
});
