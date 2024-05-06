import { useSelector } from 'react-redux';
import './FilmDetails.css';
import { RootState } from '../redux/reducers';

export const FilmDetails = () => {
    const {activeFilm} = useSelector((state: RootState) => state.film);

  return (
        <div className='filmDetails'>
            <h1>{activeFilm?.title}</h1>
            <p>Release date: {activeFilm?.release_date}</p>
            <p>Episode: {activeFilm?.episode_id}</p>
            <p>Director: {activeFilm?.director}</p>
            <p>Producer: {activeFilm?.producer}</p>
            <p className='opening-crawl'>{activeFilm?.opening_crawl}</p>
        </div>
  )
}
