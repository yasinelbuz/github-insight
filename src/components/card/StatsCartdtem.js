import React from 'react'
import styles from './StatsCard.module.scss'

const StatsCardItem = ({ icon, text, num }) => {

    return (
        <article className={styles['stats-card']}>
            <span className={`${styles.icon} ${styles[text]}`} >
                {icon}
            </span>
            <div className={styles.info}>
                <h3>{num}</h3>
                <p >{text}</p>
            </div>
        </article>
    )
}

export default StatsCardItem