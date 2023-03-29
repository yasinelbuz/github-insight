import React from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGithubUserByFollowersQuery } from '@/services/githubUser';
import { setPage } from '@/redux/usersSlice';

const FollowersCard = () => {
    const { searchUser, followers, page } = useSelector(state => state.users)
    const { data, isLoading, isFetching, isSuccess } = useGetGithubUserByFollowersQuery({ name: searchUser, page }, {
        refetchOnMountOrArgChange: true,
    });
    const dispatch = useDispatch();

    const loadFollowers = () => {
        if (isSuccess) {
            dispatch(setPage(1))
        }
    }

    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            {!isLoading && <div className={styles.followers}>
                {followers?.map(followers => <Follower key={followers.id} followers={followers} />)}
                {(data.length != 0 && data.length == process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE) && <button onClick={loadFollowers}>
                    {isFetching ? "Fetching..." : "Go on"}
                </button>}
            </div>}
            {isLoading && <div style={{ textAlign: "center" }}>Loading...</div>}
        </div >
    );
};

export default FollowersCard;
