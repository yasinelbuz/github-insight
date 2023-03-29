import React from 'react';
import styles from '@/components/card/info/styles/Profile.module.scss';
import { Company, LinkIcon, Location } from '@/icons/icons';

const UserCard = ({ data }) => {

    const showUserInfo = (name, IconComponent) => name && <p> <IconComponent /> {name} </p>

    return (
        <div className={`${styles.card}`}>
            <div className={styles.user}>
                <article>
                    <header>
                        <img src={data?.avatar_url} alt={data?.name} />
                        <div>
                            <h4>{data?.name}</h4>
                            <p>@{data?.login}</p>
                        </div>
                        <a
                            className={styles['follow-link']}
                            href={data?.html_url}
                            target="_blank"
                        >
                            follow
                        </a>
                    </header>
                    <p className={styles.bio}>{data?.bio}</p>
                    <div className={styles['user-info']}>
                        {showUserInfo(data?.company, Company)}
                        {showUserInfo(data?.location, Location)}
                        {showUserInfo(data?.blog, LinkIcon)}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default UserCard;
