'use client'
import styles from './CodeExperience.module.scss'
import Link from 'next/link';
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
        <div className={styles.container}>
            <div className={styles.backButton}><Link href={codeExpDatas.link} ><Button name={codeExpDatas.buttonName}/></Link></div>
            <section className={styles.experiencesContainer}>

                <div className={styles.introduction}>
                    <h1 className={styles.title}>{codeExpDatas.title}</h1>
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