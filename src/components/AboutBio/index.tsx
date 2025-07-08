'use client'
import styles from './AboutBio.module.scss'
import { useLang } from '../../context/LangContext';
import type { AboutBioType } from '../../types/AboutTypes';

function AboutBio () {
 
    const { datas } = useLang();
    if(!datas) return null;
    const aboutBioDatas: AboutBioType= datas.datas.aboutBio;
        
    if(!aboutBioDatas) return null;


    return (
        <section className={styles.aboutBioContainer}>
            <div className={styles.aboutBioCard}>
                <div className={styles.infos}>
                    <div className={styles.photoContainer}>
                        <img src={aboutBioDatas.bioInfos.photoUrl}/>
                    </div>
                    <div className={styles.nameBio}>{aboutBioDatas.bioInfos.name}</div>
                    <div className={styles.ageBio}>{aboutBioDatas.bioInfos.age}</div>
                    <div className={styles.occupationBio}>{aboutBioDatas.bioInfos.occupation}</div>
                </div>
                <div className={styles.textBio}>
                    <div className={styles.titleTextBio}>{aboutBioDatas.bioText.bioTitle}</div>
                    <div className={styles.contentTextBio}>
                        <div>{aboutBioDatas.bioText.bioContent.paragraphe1}</div>
                        <div>{aboutBioDatas.bioText.bioContent.paragraphe2}</div>
                        <div>{aboutBioDatas.bioText.bioContent.paragraphe3}</div>
                    </div>
                </div>
            </div>
        </section>     
    )
}

export default AboutBio