import styles from './Capacities.module.scss'

function Capacities ({capacities}: {capacities: string[]}) {

    return (
        <ul className= {styles.tagContainer} aria-label='Compétences'>
            {capacities.map((tag, index) => {
                return (
                    <li key={`${tag}-${index}`} className= {styles.tag}>{tag}</li>
                )
            })}
        </ul>
    )
}

export default Capacities;