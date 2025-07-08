import styles from './CodeCard.module.scss'
import type { Code } from '../../types/Code';
import Capacities from '../Capacities';
import Button from '../Button';

function CodeCard({code}: {code: Code}) {

    return(
        <article className={styles.container} aria-labelledby={`codecard-title-${code.id}`}>
            <div className={styles.picContainer}>
                <img src={code.codeImgUrl} alt={`Capture d'écran du projet ${code.name}`} />
            </div>
            <div className={styles.textContainer}>
                <h2 id={`codecard-title-${code.id}`} className={styles.title}>{code.name}</h2>
                <div className={styles.text}>{code.description}</div>
                <div className={styles.tagsButton}>
                    <div className={styles.tags}>
                        <Capacities capacities={code.langages} />
                    </div>
                    {code.codeUrl !== "" &&
                    <div className={styles.button}>
                        <Button href={code.codeUrl} external={true} name="Github"/>
                    </div>
                    }
                </div>
            </div>
        </article>
    )
}
export default CodeCard;