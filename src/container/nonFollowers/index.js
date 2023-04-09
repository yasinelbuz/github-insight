import React from "react";
import styles from './nonFollowers.module.scss'
import { FollowerCard, FollowingCard, NonFollowersCard } from '@/components/follow/'

export default function NonFollowersContainer() {
   return <main>
      <section className={styles.section_container}>
         <div className="container">
            <h1>Non-Followers</h1>
            <p>Github Follower Analysis: This page shows follower and following statistics related to your Github account. The list you see on the page consists of non-followers, which are obtained by taking the difference between your followers and following lists.</p>
            <section>
               <div className={styles.nonfollowers__container}>
                  <div className={styles.follower}>
                     <FollowerCard />
                  </div>
                  <div className={styles.following}>
                     <FollowingCard />
                  </div>
                  <div className={styles.nonfollowers}>
                     <NonFollowersCard />
                  </div>
               </div>
            </section>
         </div>
      </section>
   </main>
}
