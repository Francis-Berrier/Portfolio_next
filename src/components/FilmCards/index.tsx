'use client'
import styles from './FilmCards.module.scss';
import FilmMini from '../FilmMini';
import { useLang } from '../../context/LangContext';
import type { Film } from '../../types/Film';

function FilmCards() {
  const { datas } = useLang();
  if(!datas) return null;
  const films: Film[]= datas.films;
  if(!films) return null;

  return (
    <div 
      className={styles.filmCards}
      aria-label="Filmography"
      role="region"
    >
      {films.sort((a,b) => b.id - a.id).map(film => (
        <FilmMini key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmCards;
