import { useSelector } from 'react-redux';
import { fetchCharacters } from '../services/characters';
import { useEffect, useState } from 'react';
import { Character } from '../model';
import { Loading } from '../components/Loading';
import './Characters.css';
import { CharacterCard } from '../components/CharacterCard';
import { RootState } from '../redux/reducers';

export const Characters = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);
    const {characters} = useSelector((state: RootState) => state.characters)

    useEffect(() => {
        if(characters.length > 0) {
            getCharacters();
        }
    }, []);

    async function getCharacters() {
        setIsLoading(true);
        characters.map(async (url: string) => {
            const data: Character = await fetchCharacters(url);
            setFetchedCharacters((fetchedCharacters: Character[]) => [...fetchedCharacters, data]);
        })
        setIsLoading(false);
      } 

  return (
    <div className='characters'>
        {isLoading ? <Loading /> : characters.length > 0 ? fetchedCharacters.map(character => <CharacterCard key={character.name} character={character} />) : <p className='characters-list'>There is no characters yet. Characters will be added to this page when you visit different films. </p>}
    </div>
  )
}
