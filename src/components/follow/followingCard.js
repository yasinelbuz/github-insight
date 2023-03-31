import React from "react";
import Loading from "./loading";
import FollowersDiv from "./followersDiv";
import FollowItem from "./FollowItem";
import NoUserMessage from "./noUserMessage";

import { useDispatch, useSelector } from "react-redux";
import { setFollowingPage } from "@/redux/usersSlice";
import { useGetGithubUserByFollowingQuery } from "@/services/users";

import styles from './style.module.scss';

export default function FollowingCard({ nonFollower }) {

   const dispatch = useDispatch();
   const { search, followingPage, following } = useSelector(state => state.users)
   const { data, isLoading, isFetching, isSuccess } = useGetGithubUserByFollowingQuery({ name: search, followingPage }, {
      refetchOnMountOrArgChange: true,
   });

   const changePageNumber = () => {
      if (isSuccess) {
         dispatch(setFollowingPage(1))
      }
   }

   const checkData = (data) => data?.length != 0 && data?.length == process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE
   const button = <button onClick={changePageNumber} className={styles.follow__go_on_button}>
      {isFetching ? "Fetching..." : "Go on"}
   </button>

   let followersMap = null;
   console.log(nonFollower);
   if (nonFollower) {
      followersMap = nonFollower?.map(item => <FollowItem key={item.id} item={item} />)
   }
   else {
      followersMap = following?.map(item => <FollowItem key={item.id} item={item} />)
   }

   const bottomBar = checkData(data) ? button : <NoUserMessage />

   return <div className={styles.follow__card}>
      {!isLoading ? <FollowersDiv>{followersMap}{bottomBar}</FollowersDiv> : <Loading />}
   </div>;
}
