'use client'

import styles from "./Header.module.scss"
import LangSelect from "../LangSelect";
import { useLang } from '@/context/LangContext';
import { useState, useEffect } from 'react';
import { config } from "@/assets/config";
import type { HeaderDataType } from "@/types/HeaderDataType";
import Link from "next/link";

function Header() {
    const { datas } = useLang();
    if(datas === null) return; 
       const headerDatas: HeaderDataType= datas.datas.header; 

    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [navOpen, setNavOpen] = useState(false);
    const breakPoint = config.MOBILE_BREAKPOINT;
    
    useEffect(() =>{
        if(typeof window === 'undefined') return;

        const mediaQuery: MediaQueryList= window.matchMedia(`(max-width: ${breakPoint}px)`);
        
        const handleMediaChange = (event: MediaQueryListEvent ) =>{
            setIsMobile(event.matches)
        };
        setIsMobile(mediaQuery.matches)

        mediaQuery.addEventListener('change', handleMediaChange);

        
        return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const toggleOpen= () => {
        setNavOpen(!navOpen)
    };
    
    
    if(!headerDatas) return null;
   
    return(
        <div>
            {!isMobile ?
            <header className={styles.header}>
                <div className={styles.pageLink}><Link href="/">{headerDatas.home}</Link></div>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.pageLink}><Link href="/about">{headerDatas.about}</Link></li>
                        <li className={styles.pageLink}><Link href="/contact">{headerDatas.contact}</Link></li>
                        <li><LangSelect/></li>
                        <li className={styles.picLink}><a href='https://github.com/Francis-Berrier?tab=repositories' target="_blank" rel="noopener noreferrer"><img src="/abilities_logo/github_logo.svg"/></a></li>
                    </ul>
                </nav>
            </header>
            :
            <div className={styles.mobileVisible}>
                <header className={styles.header}>   
                    <div className={styles.pageLink}><Link href="/">{headerDatas.home}</Link></div>
                    <button className={`${styles.burger} ${navOpen ? styles.isOpen : ''}`} 
                        onClick={toggleOpen}
                        aria-label="Ouvrir ou fermer le menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </header>
                <nav className={`${styles.navHidden} ${navOpen ? styles.navDisplay : ''}`}>
                    <ul className={styles.ul}>
                        <li className={styles.pageLink}><Link href="/about">{headerDatas.about}</Link></li>
                        <li className={styles.pageLink}><Link href="/contact">{headerDatas.contact}</Link></li>
                        <li><LangSelect/></li>
                        <li className={styles.picLink}><a href='https://github.com/Francis-Berrier?tab=repositories' target="_blank" rel="noopener noreferrer"><img src="/abilities_logo/github_logo.svg"/></a></li>
                        
                    </ul>
                </nav>
            </div>
            }
        </div>       
    )
}

export default Header;