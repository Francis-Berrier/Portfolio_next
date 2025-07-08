import styles from './Logo.module.scss'
import Image from 'next/image';

function Logo({logoUrl}: {logoUrl: string}) {
    return (
        <div className= {styles.logo}>
            <div className={styles.imgContainer}><Image src= {logoUrl} alt="Logo de l'école" fill className={styles.img}/></div>
        </div>
    )
}

export default Logo;