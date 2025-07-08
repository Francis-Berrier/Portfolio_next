'use client'
import styles from './ContactPresentation.module.scss'
import type { ContactPresentationType } from '../../types/HomeDataType';
import { useLang } from '../../context/LangContext';
import Button from '../Button'; 


function ContactPresentation() {
    const { datas } = useLang();
    if(!datas) return null;
    const contactPresDatas: ContactPresentationType= datas.datas.homeContact;
    if(!contactPresDatas) return null;

    return (
        <section className={styles.container} aria-labelledby="contact-presentation-title" >
            <p className={styles.tag}>{contactPresDatas.entete}</p>
            <div>
                <h2 className={styles.title} id="contact-presentation-title">{contactPresDatas.title}</h2>
                <h3 className={styles.subtitle}>{contactPresDatas.subtitle}</h3>
            </div>
            <div className={styles.button}>
                <Button href='/contact' name={contactPresDatas.linkButton}/>
            </div>
            <p className={styles.text}>{contactPresDatas.text}</p> 
        </section>
    )
}

export default ContactPresentation;