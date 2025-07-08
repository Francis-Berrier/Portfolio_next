'use client';

import styles from './LangSelect.module.scss'
import Gb from '@/assets/images/drapeaux/gb.webp'
import France from '@/assets/images/drapeaux/france.webp'
import { useLang } from '@/context/LangContext'


function LangSelect() {
    const { lang, setLang } = useLang();

     const toggleLang = () => {
        setLang(lang=== "fr" ? "en": "fr");
     }

    return(
        <button className={styles.langButton} onClick={toggleLang}>
            <img 
                src={lang === 'fr' ? France.src : Gb.src}
                alt={lang === 'fr' ? 'Drapeau français' : 'British flag'}
            />
        </button>
    )
}

export default LangSelect