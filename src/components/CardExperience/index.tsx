import styles from './CardExperience.module.scss'
import Carousel from '../Carousel'
import Button from '../Button'

function CardExperience({pictures, speed, title, text, link, buttonName}: {pictures: string[], speed: number, title: string, text: string, link: string, buttonName: string}) {

    return (
        <article 
            className={styles.cardContainer}
            aria-labelledby={`experience-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
            <div className={styles.carouselContainer}>
                <Carousel pictures= {pictures} speed={speed}/>
            </div>
            <div className={styles.infosContainer}>
                <h3 
                    className={styles.title}
                    id={`experience-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                    {title}
                </h3>
                <p className={styles.text}>{text}</p>
                <div className={styles.button}><Button href={link} name={buttonName}/></div>
            </div>
        </article>
    )
}

export default CardExperience