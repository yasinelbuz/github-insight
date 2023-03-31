import React from "react";
import styles from './style.module.scss';
import Loading from "./loading";
import FollowersDiv from "./followersDiv";
import FollowItem from "./FollowItem";
import { useDispatch, useSelector } from "react-redux";
import { setFollowerPage } from "@/redux/usersSlice";
import NoUserMessage from "./noUserMessage";
import { useGetGithubUserByFollowersQuery } from "@/services/users";

export default function FollowerCard() {

   const { search, followerPage, followers, following } = useSelector(state => state.users)
   const { data, isLoading, isFetching, isSuccess } = useGetGithubUserByFollowersQuery({ name: search, followerPage }, {
      refetchOnMountOrArgChange: true,
   });
   const dispatch = useDispatch();

   const changePageNumber = () => {
      if (isSuccess) {
         dispatch(setFollowerPage(1))
      }
   }

   const checkData = (data) => data?.length != 0 && data?.length == process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE

   const button = <button onClick={changePageNumber} className={styles.follow__go_on_button}>
      {isFetching ? "Fetching..." : "Go on"}
   </button>

   const followersMap = followers?.map(item => <FollowItem key={item.id} item={item} />)

   const bottomBar = checkData(data) ? button : <NoUserMessage />

   return <div className={styles.follow__card}>
      {!isLoading ? <FollowersDiv>{followersMap}{bottomBar}</FollowersDiv> : <Loading />}
   </div>;
}
