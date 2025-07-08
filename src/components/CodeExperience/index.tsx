'use client'
import styles from './CodeExperience.module.scss'
import { useLang } from '../../context/LangContext';
import type { ExperiencesCodeDatasType } from '../../types/AboutTypes';
import CodeCards from '../CodeCards'
import Button from '../Button'

function CodeExperience () {
    const { datas } = useLang();
    if(!datas) return null;
    const codeExpDatas: ExperiencesCodeDatasType= datas.datas.aboutExperienceCode;      
    if(!codeExpDatas) return null;


    return (
        <div className={styles.container} aria-labelledby="code-experience-title" role="region">
            <div className={styles.backButton}>
                <Button href={codeExpDatas.link} name={codeExpDatas.buttonName}/>
            </div>
            <section className={styles.experiencesContainer}>

                <div className={styles.introduction}>
                    <h1 className={styles.title} id="code-experience-title">{codeExpDatas.title}</h1>
                    <div className={styles.introText}>{codeExpDatas.introText}</div>
                </div>
                <div className={styles.codeCards}>
                    <CodeCards/>
                </div>
            </section>
        </div>
    )   
}

export default CodeExperience