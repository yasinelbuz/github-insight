import React from "react";
import FollowItem from "./FollowItem";
import { useSelector } from "react-redux";
import styles from './style.module.scss';

export default function NonFollowersCard() {

   const { followers, following } = useSelector((state) => state.users);

   const nonFollower = following.filter((user) => {
      return !followers.some((follower) => {
         return follower.id === user.id;
      });
   })

   return <div className={styles.follow__card}>
      {nonFollower?.map(item => <FollowItem key={item.id} item={item} />)}
   </div>
}
