'use client'
import styles from './Landing.module.scss'
import type { HomeDataType } from '../../types/HomeDataType';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../../context/LangContext';
import Link from 'next/link';
import Button from '../Button'; 

function Landing () {

    const { datas } = useLang();
    if(datas === null) return null; 
    const homeDatas: HomeDataType= datas.datas.home; 

    return (
        <div className={styles.wrapper}>
            <div className={styles.fond}>
                <img src='/fonds/fenetre_vscode.webp'/>
            </div>
            <section className={styles.landingContainer}>
                
                <div className={styles.textAccueilContainer}>
                    <h1 className={styles.title}>
                        <span>{homeDatas.title}</span>
                        <span>{homeDatas.subtitle}</span>
                    </h1>
                    <div className={styles.introText}>
                        {homeDatas.introText}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.pageLink}><Link href="/contact">
                    <Button name={homeDatas.buttonContact} />
                    </Link></div>
                    <a href='https://github.com/Francis-Berrier?tab=repositories' target='_blank'>
                    <Button name={homeDatas.buttonGit} />
                    </a>
                    <a href='/cv_essai.pdf' download className={styles.downloadButton}>
                        <span><FontAwesomeIcon icon={faDownload}/></span>
                        <span>{homeDatas.buttonCV}</span>
                    </a>    
                </div>
            </section>
        </div>   
    )
};

export default Landing;