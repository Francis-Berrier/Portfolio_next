'use client'
import styles from './CinemaExperience.module.scss';
import { useLang } from '../../context/LangContext';
import type { ExperiencesCinemaDatasType } from '../../types/AboutTypes';
import Button from '../Button';
import FilmCards from '../FilmCards';

function CinemaExperience () {
    const { datas } = useLang();
    if(!datas) return null;
    const cineExpDatas: ExperiencesCinemaDatasType= datas.datas.aboutExperienceCinema;
    if(!cineExpDatas) return null;

    return (
        <div>
            <div className={styles.backButton}>
                <Button href={cineExpDatas.link} name={cineExpDatas.buttonName}/>
            </div>
            <section 
                className={styles.experiencesContainer}
                aria-labelledby="cinema-experience-title"
            >
                <div className={styles.introduction}>
                    <h2 className={styles.title} id="cinema-experience-title">{cineExpDatas.title}</h2>
                    <p className={styles.introText}>{cineExpDatas.introText}</p>
                </div>
                <div className={styles.filmo}>
                    <FilmCards/>
                </div>
                <div className={styles.linkFilmoContainer}>
                    <Button external={true} href={cineExpDatas.urlFilmo} name={cineExpDatas.textFilmo} />  
                </div>  
            </section>
        </div>
    )
}

export default CinemaExperience;