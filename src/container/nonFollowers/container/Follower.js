import React from 'react';
import styles from '@/container/nonFollowers/nonFollowers.module.scss';
const Follower = ({ followers }) => {
    return (
        <article className={styles.box}>
            <img
                src={followers.avatar_url}
                alt={styles.login}
                className={styles.avatar__url}
            />
            <div className={styles.followers__info}>
                <h4>{followers?.login}</h4>
                <a
                    className={styles.follow__link}
                    href={followers.html_url}
                    target="_blank"
                >
                    {followers.html_url}
                </a>
            </div>
        </article>
    );
};

export default Follower;
