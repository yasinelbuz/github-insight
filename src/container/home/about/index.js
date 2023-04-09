import React from "react";
import styles from './styles.module.scss';

export default function About() {
   return <>
      <section className={styles.about__section}>
         <div className="container">
            <div className={styles.container__inner}>
               <h2>About Github Insight</h2>
               <p>Github Insight is an application that uses Github API to analyze user data on Github accounts. This application allows users to view statistics on their Github repositories, follower count, followed users, non-followers, rate limits, and many other pieces of information.</p>
            </div>
         </div>
      </section>
   </>;
}
