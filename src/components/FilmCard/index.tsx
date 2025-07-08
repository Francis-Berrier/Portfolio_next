'use client'
import styles from './FilmCard.module.scss'
import { useLang } from '../../context/LangContext';
import type { Film, FilmCardDataType} from '../../types/Film';
import Image from 'next/image';

function FilmCard ({film}: {film: Film}) {
    const { datas } = useLang();
    if(!datas) return null;
    const filmCardsDatas: FilmCardDataType= datas.datas.filmCardData;         
    if(!filmCardsDatas) return null;
    
    return (
        <article className= {styles.cardContainer}>
            <a className= {styles.imgFilm} 
                href={film.imdbUrl} target="_blank " 
                rel="noopener noreferrer"
                aria-label={`IMDB Page: ${film.title}`}
            >
                <Image src= {film.imgFilmUrl} alt={`Film ${film.title} (${film.year})`} fill className={styles.img}/>
                <span className={styles.overlay} aria-hidden="true">{filmCardsDatas.movieInfos}</span>
            </a>
            <div className= {styles.filmInfos}>
                <h3 className= {styles.title}>{film.title}&nbsp;({film.year})</h3>
                <div className= {styles.infos}>
                    <p>
                        <strong>{filmCardsDatas.directedBy}</strong> {film.director}
                    </p>
                    <p>
                        <strong>{filmCardsDatas.starring}</strong>
                        {film.actors.map((name, index) => (
                        <span key={`${name}-${index}`} className={styles.actorsName}>
                            {name}
                            {index < film.actors.length - 1 ? ', ' : ''}
                        </span>
                        ))}
                    </p>
                    <p>
                        <strong>{filmCardsDatas.occupation}</strong> {film.occupation}
                    </p>
                </div>
            </div>
        </article>
    )

}

export default FilmCard;