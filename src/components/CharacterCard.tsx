import { Character } from '../model'
import './CharacterCard.css';
import { Link } from'react-router-dom';
import { useDispatch } from "react-redux";
import { addActiveCharacter } from '../redux/actions';


interface CharacterCardProps {
    character: Character
}

export const CharacterCard = ({character}: CharacterCardProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addActiveCharacter(character));
    }

  return (
        <Link  to={`/characters/${character.name}`} className='character-container' onClick={handleClick}>
               <p className='characters-list'>{character.name}</p>
        </Link>

      
  )
}
