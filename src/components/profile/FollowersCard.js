import React, { useEffect, useRef, useState } from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGithubUserByFollowersQuery } from '@/services/githubUser';
import { setPage } from '@/redux/usersSlice';

const FollowersCard = () => {
    const divRef = useRef();
    const { searchUser, items, page } = useSelector(state => state.users)
    const { data, isLoading, isSuccess } = useGetGithubUserByFollowersQuery({ name: searchUser, page }, {
        refetchOnMountOrArgChange: true,
    });
    const dispatch = useDispatch();

    const handleScroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = divRef.current;

        if (offsetHeight + scrollTop === scrollHeight) {
            dispatch(setPage(1))
        }
    }

    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            <div className={styles.followers} ref={divRef}>
                {items?.map(followers => <Follower key={followers.id} followers={followers} />)}
                <button onClick={handleScroll}>Yükle</button>
            </div>
        </div>
    );
};

export default FollowersCard;
