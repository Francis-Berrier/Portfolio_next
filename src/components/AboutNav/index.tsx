'use client'
import styles from './AboutNav.module.scss'
import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import { useState } from 'react';
import type { NavButton, AboutDatasType } from '../../types/AboutTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function AboutNav () {

    const [isActive, setIsActive]= useState<number>();
    
    const handleClick= (button: NavButton) => {
        setIsActive(button.id);  
    }
    const { datas } = useLang();
    if(!datas) return null;
    const aboutDatas: AboutDatasType= datas.datas.aboutNav;
        
    if(!aboutDatas) return null;

    return (
        <div className={styles.navAbout}>
            <h2 className={styles.title}>{aboutDatas.title}</h2>
            <nav>
                <ul className={styles.navList}>
                    {aboutDatas.buttons.map((button) => (
                        <li key= {`${button.id}`}>
                            <Link href={button.page} 
                                className={isActive=== button.id ? styles.active : styles.inactive}
                                onClick= {() => handleClick(button)}
                            >
                                {button.name}
                            </Link>
                        </li>   
                    ))}          
                </ul>
            </nav>
            <a href='/cv_essai.pdf' download className={styles.downloadButton}>
                <span><FontAwesomeIcon icon={faDownload}/></span>
                <span>{aboutDatas.buttonCV}</span>
            </a>    
        </div>
        
    )
}

export default AboutNav;