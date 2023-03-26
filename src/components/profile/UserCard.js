import React from 'react';

import styles from './Profile.module.scss';

import { Company, LinkIcon, Location } from '@/icons/icons';

const UserCard = ({ data }) => {
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
                        {data?.company && (
                            <p>
                                <Company />
                                {data?.company}
                            </p>
                        )}
                        {data?.location && (
                            <p>
                                <Location />
                                {data?.location}
                            </p>
                        )}
                        {data?.blog && (
                            <p>
                                <a href={`https://www.${data?.blog}`}>
                                    <LinkIcon />
                                    {data?.blog}
                                </a>
                            </p>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default UserCard;
