import React from 'react';
import styles from './Profile.module.scss';
const Follower = ({ followers }) => {
    return (
        <article>
            <img
                src={followers.avatar_url}
                alt={followers.login}
            />
            <div className={styles['followers-info']}>
                <h4>{followers?.login}</h4>
                <a
                    className={styles['follow-link']}
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
