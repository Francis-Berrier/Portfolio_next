'use client'
import styles from './AboutFormation.module.scss'
import FormationCards from "../FormationCards";
import { useLang } from '@/context/LangContext';

function AboutFormation () {
    const { datas } = useLang();
    if(!datas) return null;
    const title: string= datas.datas.aboutFormation

    return (
        
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <FormationCards />
        </section>
    )
}

export default AboutFormation;