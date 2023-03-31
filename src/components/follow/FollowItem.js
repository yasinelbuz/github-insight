import React from 'react';
import styles from './style.module.scss';
const FollowItem = ({ item }) => {
    return (
        <div className={styles.follow__item}>
            <img
                src={item.avatar_url}
                alt={styles.login}
                className={styles.avatar__url}
            />
            <div className={styles.followers__info}>
                <h4>{item?.login}</h4>
                <a
                    className={styles.follow__link}
                    href={item.html_url}
                    target="_blank"
                >
                    {item.html_url}
                </a>
            </div>
        </div>
    );
};

export default FollowItem;
