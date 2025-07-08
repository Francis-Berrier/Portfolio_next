'use client'
import styles from './ContactPresentation.module.scss'
import Link from 'next/link';
import type { ContactPresentationType } from '../../types/HomeDataType';
import { useLang } from '../../context/LangContext';
import Button from '../Button'; 


function ContactPresentation() {
    const { datas } = useLang();
    if(!datas) return null;
    const contactPresDatas: ContactPresentationType= datas.datas.homeContact;
    if(!contactPresDatas) return (<div>Prout</div>);

    return (
        <section className={styles.container}>
            <div className={styles.tag}>{contactPresDatas.entete}</div>
            <div>
                <h2 className={styles.title}>{contactPresDatas.title}</h2>
                <h3 className={styles.subtitle}>{contactPresDatas.subtitle}</h3>
            </div>
            <div className={styles.button}><Link href='/contact' ><Button name={contactPresDatas.linkButton}/></Link></div>
            <div className={styles.text}>{contactPresDatas.text}</div> 
        </section>
    )

}

export default ContactPresentation;