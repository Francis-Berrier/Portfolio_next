'use client'
import styles from './CinemaExperience.module.scss';
import Link from 'next/link';
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
            <div className={styles.backButton}><Link href={cineExpDatas.link} ><Button name={cineExpDatas.buttonName}/></Link></div>
            <section className={styles.experiencesContainer}>

                <div className={styles.introduction}>
                    <h1 className={styles.title}>{cineExpDatas.title}</h1>
                    <div className={styles.introText}>{cineExpDatas.introText}</div>
                </div>
                
                <div className={styles.filmo}>
                    <FilmCards/>
                </div>
                <div className={styles.linkFilmoContainer}>
                    <a href={cineExpDatas.urlFilmo} target='_blank'>
                    <Button name={cineExpDatas.textFilmo} />
                    </a>   
                </div> 
                
            </section>
        </div>
        
    )
}

export default CinemaExperience;