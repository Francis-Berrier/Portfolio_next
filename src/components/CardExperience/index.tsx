import styles from './CardExperience.module.scss'
import Link from 'next/link'
import Carousel from '../Carousel'
import Button from '../Button'

function CardExperience({pictures, speed, title, text, link, buttonName}: {pictures: string[], speed: number, title: string, text: string, link: string, buttonName: string}) {

    return (
        <article className={styles.cardContainer}>
            <div className={styles.carouselContainer}>
                <Carousel pictures= {pictures} speed={speed}/>
            </div>
            <div className={styles.infosContainer}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.text}>{text}</div>
                <div className={styles.button}><Link href={link}><Button name={buttonName}/></Link></div>
            </div>
        </article>
    )
}

export default CardExperience