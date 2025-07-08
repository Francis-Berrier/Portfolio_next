import styles from './Capacities.module.scss'

function Capacities ({capacities}: {capacities: string[]}) {

    return (
        <div className= {styles.tagContainer}>
            {capacities.map((tag, index) => {
                return (
                    <span key={`${tag}-${index}`} className= {styles.tag}>{tag}</span>
                )
            })}
        </div>
    )
}

export default Capacities;