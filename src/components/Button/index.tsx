import styles from "./Button.module.scss";

function Button ({ name }:  {name: string }) {
    return (
        <div className={styles.button}>
            {name}
        </div>
    )

}
export default Button;