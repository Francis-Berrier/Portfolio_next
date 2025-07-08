import styles from './Logo.module.scss'

function Logo({logoUrl}: {logoUrl: string}) {
    return (
        <div className= {styles.logo}>
            <img src= {logoUrl}/>
        </div>
        
    )
}

export default Logo;