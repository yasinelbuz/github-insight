import React from "react";
import styles from './styles.module.scss';
import { NonFollowersIcon, RateIcon, Repos } from "@/icons";

import Link from 'next/link';

export default function Feature() {
   return <section>
      <div className="container">
         <div className={styles.container_inner}>
            <div className={styles.container__inner__box}>
               <div className={styles.image}>
                  <Repos style={{ width: "36px", height: "36px" }} />
               </div>
               <div className={styles.text}>
                  <h2>Repos</h2>
                  <p>The repositories pulled from GitHub are collections of code and related files that developers use to manage and collaborate on their projects. </p>
                  <Link href="/repos">Analyze</Link>
               </div>
            </div>
            <div className={styles.container__inner__box}>
               <div className={styles.image}>
                  <NonFollowersIcon style={{ width: "36px", height: "36px" }} />
               </div>
               <div className={styles.text}>
                  <h2>Non-followers</h2>
                  <p>The non-followers feature allows you to identify users who do not follow you back on GitHub. This feature can help you manage your follower list and identify potential followers who may be interested in your work.</p>
                  <Link href="/non-followers">Analyze</Link>
               </div>
            </div>
            <div className={styles.container__inner__box}>
               <div className={styles.image}>
                  <RateIcon style={{ width: "36px", height: "36px" }} />
               </div>
               <div className={styles.text}>
                  <h2>Rate</h2>
                  <p>The rate feature enables you to analyze users' activities on GitHub, such as their repositories, stars, forks, and other statistics. This feature can help you gauge a user's level of activity and engagement on the platform.</p>
                  <Link href="rate">Analyze</Link>
               </div>
            </div>
         </div>
      </div>
   </section >;
}
