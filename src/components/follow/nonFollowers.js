import React, { useEffect, useState } from "react";
import FollowItem from "./FollowItem";
import { useSelector } from "react-redux";
import styles from './style.module.scss';
import { fetchAllFollowersData, fetchAllFollowingData } from "@/helper/getAllData";

export default function NonFollowersCard() {

   const { search } = useSelector((state) => state.users);
   const [followers, setFollowers] = useState();
   const [following, setFollowing] = useState();

   useEffect(() => {
      fetchAllFollowersData(search).then(data => setFollowers(data));
      fetchAllFollowingData(search).then(data => setFollowing(data));
   }, []);

   const nonFollower = following?.filter((user) => {
      return !followers?.some((follower) => {
         return follower.id === user.id;
      });
   });

   return <div className={styles.follow__card}>
      {nonFollower?.map((item, id) => <FollowItem key={id} item={item} />)}
   </div>
}
