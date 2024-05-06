import{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../services/films';
import { Film } from '../model';
import { FilmCard } from '../components/FilmCard';
import { Loading } from '../components/Loading';
import './Films.css';
import { addFilmCollection } from '../redux/actions';
import { RootState } from '../redux/reducers';

export const Films = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const {filmCollection} = useSelector((state: RootState) => state.film);

    useEffect(() => {
        if(filmCollection.length === 0) {
            getFilms();
        } else {
            setFilms(filmCollection);
        }
    }, []);

    async function getFilms() {
        setIsLoading(true);
        const data = await fetchFilms();
        setFilms(data?.results);
        setIsLoading(false);
        dispatch(addFilmCollection(data?.results));
      }

  return (
    <div className='filmList'>
        {isLoading ? <Loading /> : films.map(film => <FilmCard key={film.episode_id} film={film}/>)}
    </div>
  )
}
