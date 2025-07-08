import styles from './SkillsPresentationCard.module.scss'
import type { SkillsPresentationCardType } from '../../types/HomeDataType';

function SkillsPresentationCard({skills}: {skills: SkillsPresentationCardType}) {

    return (
        <article className={styles.card}> 
            <div className={styles.logoContainer}>
                <img src={skills.logoUrl} alt={`Logo de ${skills.title}`}/>
            </div>
            <h3 className={styles.title}>{skills.title}</h3>
            <div className={styles.text}>{skills.text}</div>
        </article>
    )
}

export default SkillsPresentationCard;