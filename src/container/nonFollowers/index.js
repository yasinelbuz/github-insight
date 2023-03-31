import React from "react";
import styles from './nonFollowers.module.scss'
import { FollowerCard, FollowingCard, NonFollowersCard } from '@/components/follow/'

export default function NonFollowersContainer() {
   return <main>
      <section>
         <div className="container">
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
