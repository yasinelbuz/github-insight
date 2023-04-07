import React from "react";
import { FollowerCard } from "@/components/follow";
import styles from '@/container/home/styles.module.scss';
import Title from "@/components/title/title";
import UserCard from "@/components/userCard";

export default function FollowerCardContainer({ data }) {
   return <section style={{ marginBottom: "2rem" }}>
      <div className="container">
         <div className={styles.cards__container}>
            <div>
               <Title h1="User Bio" p="Information about the user" />
               <div style={{ marginTop: "20px", height: "400px", backgroundColor: "#19376d", borderRadius: "20px", padding: " 20px" }}>
                  <UserCard data={data} />
               </div>
            </div>
            <div>
               <Title h1="Follower" p="Users who follow" />
               <div className={styles.follower__container}>
                  <FollowerCard />
               </div>
            </div>
         </div>
      </div>
   </section >
}