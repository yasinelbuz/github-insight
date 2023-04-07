//styles
import styles from './styles.module.scss'

const StatsCardItem = ({ icon, text, num, ...props }) => {
    return (
        <article className={styles.stats__card} {...props}>
            <div className={styles.stats__inner}>
                <span className={`${styles.icon} ${styles[text]}`} >
                    {icon}
                </span>
                <div className={styles.info}>
                    <h3>{num}</h3>
                    <p >{text}</p>
                </div>
            </div>
        </article>
    )
}

export default StatsCardItem