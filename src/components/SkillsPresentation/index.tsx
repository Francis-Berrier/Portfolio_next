'use client'
import styles from './SkillsPresentation.module.scss';
import { useLang } from '../../context/LangContext';
import Button from '../Button';
import Link from 'next/link';
import SkillsPresentationCard from '../SkillsPresentationCard';
import type { SkillsPresentationDatas } from '../../types/HomeDataType';


function SkillsPresentation() {
    const { datas } = useLang();
    if(datas === null) return; 
    const skillsPresDatas: SkillsPresentationDatas= datas.datas.homeSkills; 
        
    if(!skillsPresDatas) return null;
    
    return(
        <section className={styles.container}>
           <div className={styles.tag}>{skillsPresDatas.entete}</div>
           <h2 className={styles.title}>{skillsPresDatas.title}</h2>
           <div className={styles.cards}>
            {skillsPresDatas.cards.map((card, index) =>(
                <SkillsPresentationCard key={index} skills={card}/>
            ))}
           </div>
           <div className={styles.button}><Link href='/about/abilities' ><Button name={skillsPresDatas.linkButton}/></Link></div>
        </section>
    )
}

export default SkillsPresentation;