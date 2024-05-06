import React from 'react'
import { useSelector } from 'react-redux'
import './CharacterDetails.css';
import { RootState } from '../redux/reducers';

export const CharacterDetails = () => {
    const {activeCharacter} = useSelector((state: RootState) => state.characters);

  return (
    <div className='characterDetails'>
        <h1>{activeCharacter?.name}</h1>
        <p>Birth year: {activeCharacter?.birth_year}</p>
        <p>Gender: {activeCharacter?.gender}</p>
        <p>Height: {activeCharacter?.height}</p>
        <p>Mass: {activeCharacter?.mass}</p>
        <p>Eye color: {activeCharacter?.eye_color}</p>
        <p>Hair color: {activeCharacter?.hair_color}</p>
        <p>Skin color: {activeCharacter?.skin_color}</p>
    </div>
  )
}
