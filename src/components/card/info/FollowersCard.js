import React from 'react';
import Follower from './Follower';
import styles from '@/components/card/info/styles/Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGithubUserByFollowersQuery } from '@/services/users';
import { setPage } from '@/redux/usersSlice';

const FollowersCard = () => {
    const dispatch = useDispatch();

    const { search, followers, page } = useSelector(state => state.users)
    const { data, isLoading, isFetching, isSuccess } = useGetGithubUserByFollowersQuery({ name: search, page }, {
        //triggering every time the search and page arg changes
        refetchOnMountOrArgChange: true,
    });

    const changePageNumber = () => isSuccess && dispatch(setPage(1))

    const checkData = (data) => data?.length != 0 && data?.length == process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE

    const button = <button onClick={changePageNumber}>
        {isFetching ? "Fetching..." : "Go on"}
    </button>

    const followersMap = followers?.map(follower => <Follower key={follower.id} followers={follower} />)

    const loadingDiv = <div style={{ textAlign: "center" }}>Loading...</div>

    const followersDiv = <div className={styles.followers}>
        {followersMap}
        {checkData(data) ? button : "Gösterilecek başka kullanıcı kalmadı..."}
    </div>

    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            {!isLoading ? followersDiv : loadingDiv}
        </div >
    );
};

export default FollowersCard;
