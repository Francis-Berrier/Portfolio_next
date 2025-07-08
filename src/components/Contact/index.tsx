'use client'
import styles from './Contact.module.scss';
import FormContact from '../../components/FormContact';
import type { ContactDatasType } from '../../types/ContactType';
import { useLang } from '@/context/LangContext';

function Contact() {
    const { datas } = useLang();
    if(!datas) return null;
    const contactDatas: ContactDatasType= datas.datas.contact;
    if(!contactDatas) return null;

    return (
        <main className={styles.contactContainer}>
            <section className={styles.contactIntro} aria-labelledby="contact-page-title">
                <h1 className={styles.title} id="contact-page-title">{contactDatas.title}</h1>
                <p className={styles.introText}>{contactDatas.introText}</p>
            </section>
            <section className={styles.formContact}>
                <FormContact/>
            </section>
        </main>
    )
}

export default Contact;
