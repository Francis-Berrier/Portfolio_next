'use client'
import styles from './Experiences.module.scss'
import { useLang } from '../../context/LangContext';
import type { Film } from '../../types/Film';
import type { Code } from '../../types/Code';
import type { ExperiencesDatasType } from '../../types/AboutTypes';
import CardExperience from '../CardExperience';


function Experiences() {

    const { datas } = useLang();
    if(!datas) return null;
    const films: Film[]= datas.films;
    const filmPictures: string[]= films.map(film => film.imgFilmUrl);
    const codes: Code[]= datas.code;
    const codePictures: string[]=codes.map(code => code.codeImgUrl);
    const experienceDatas: ExperiencesDatasType= datas.datas.aboutExperience;
    if(!experienceDatas) return null;
    
    return (
        <section className={styles.experiencesContainer}>
            <div className={styles.card}>
                <CardExperience 
                    pictures={codePictures}
                    speed= {2.8}
                    title={experienceDatas.code.title} 
                    text={experienceDatas.code.text} 
                    link={experienceDatas.code.link} 
                    buttonName={experienceDatas.code.buttonName} />
            </div>
            <div className={styles.card}>
                <CardExperience 
                    pictures={filmPictures}
                    speed= {3.2}
                    title={experienceDatas.cinema.title} 
                    text={experienceDatas.cinema.text} 
                    link={experienceDatas.cinema.link} 
                    buttonName={experienceDatas.cinema.buttonName} />
            </div>
            
        </section>
    )   
}

export default Experiences