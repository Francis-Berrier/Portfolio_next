'use client'
import styles from './AboutBio.module.scss'
import { useLang } from '../../context/LangContext';
import type { AboutBioType } from '../../types/AboutTypes';
import Image from 'next/image';

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
                        <Image src={aboutBioDatas.bioInfos.photoUrl} alt={`Photo ${aboutBioDatas.bioInfos.name}`} fill className={styles.img}/>
                    </div>
                    <h2 className={styles.nameBio}>{aboutBioDatas.bioInfos.name}</h2>
                    <p className={styles.ageBio}>{aboutBioDatas.bioInfos.age}</p>
                    <p className={styles.occupationBio}>{aboutBioDatas.bioInfos.occupation}</p>
                </div>
                <div className={styles.textBio}>
                    <h3 className={styles.titleTextBio}>{aboutBioDatas.bioText.bioTitle}</h3>
                    <div className={styles.contentTextBio}>
                        <p>{aboutBioDatas.bioText.bioContent.paragraphe1}</p>
                        <p>{aboutBioDatas.bioText.bioContent.paragraphe2}</p>
                        <p>{aboutBioDatas.bioText.bioContent.paragraphe3}</p>
                    </div>
                </div>
            </div>
        </section>     
    )
}

export default AboutBio