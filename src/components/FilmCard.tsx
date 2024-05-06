import { Film } from '../model'
import './FilmCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCharacters, addFilm } from '../redux/actions';

interface FilmProps {
    film: Film
}

export const FilmCard = ({film}: FilmProps) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(addCharacters(film.characters));
        dispatch(addFilm(film));
    }

  return (
    <Link key={film.episode_id} className='filmContainer' to={`/film/${film.title}`} onClick={handleClick} >
        <h1>{film.title}</h1>
        <p>Episode: {film.episode_id}</p>
        <p>Release date: {film.release_date}</p>
    </Link>
  )
}
