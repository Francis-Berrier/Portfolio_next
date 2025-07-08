import styles from './CodeCard.module.scss'
import type { Code } from '../../types/Code';
import Capacities from '../Capacities';
import Button from '../Button';

function CodeCard({code}: {code: Code}) {

    return(
        <article className={styles.container}>
            <div className={styles.picContainer}>
                <img src={code.codeImgUrl}/>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{code.name}</h2>
                <div className={styles.text}>{code.description}</div>
                <div className={styles.tagsButton}>
                    <div className={styles.tags}>
                        <Capacities capacities={code.langages} />
                    </div>
                    {code.codeUrl !== "" &&
                    <a href={code.codeUrl} target="_blank" className={styles.button}>
                        <Button name="Code Source"/>
                    </a>
                    }
                    

                </div>
            </div>

        </article>
    )
}

export default CodeCard;