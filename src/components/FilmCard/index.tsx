'use client'
import styles from './FilmCard.module.scss'
import { useLang } from '../../context/LangContext';
import type { Film, FilmCardDataType} from '../../types/Film';

function FilmCard ({film}: {film: Film}) {
    const { datas } = useLang();
    if(!datas) return null;
    const filmCardsDatas: FilmCardDataType= datas.datas.filmCardData;         
    if(!filmCardsDatas) return null;
    
    return (
        <article className= {styles.cardContainer}>
            <a className= {styles.imgFilm} href={film.imdbUrl} target="_blank ">
                <img src= {film.imgFilmUrl} />
                <span className={styles.overlay}>{filmCardsDatas.movieInfos}</span>
            </a>
            <div className= {styles.filmInfos}>
                <h3 className= {styles.title}>{film.title}&nbsp;({film.year})</h3>
                <div className= {styles.infos}>
                    <div>{filmCardsDatas.directedBy}{film.director}</div>
                    <div>{filmCardsDatas.starring}{film.actors.map((name, index) => {
                        return (
                            <span key={`${name}-${index}`} className= {styles.actorsName}>{name},&nbsp;</span>
                        )
                        })}
                    </div>
                    <div>{filmCardsDatas.occupation}{film.occupation}</div>
                </div>
            </div>
        </article>
    )

}

export default FilmCard;