import React from "react";
import styles from './styles.module.scss';
import Logo from "../header/logo";
import Link from "next/link";
import github from '@/assets/github.svg'

export default function Footer() {

   console.log(github);

   return <section className={styles.section__footer}>
      <div className={styles.footer__logo}>
         <Logo />
         <p>Github Insight provides users with a broader perspective by leveraging a limited service offered by the Github API.</p>
      </div>
      <div className={styles.section__right}>
         <div>
            <a href="https://github.com/yasinelbuz/github-info" target="_blank" className={styles.open__source}>
               <div>Open Source</div>
               <img src={github.src} alt="github" />
            </a>
            <div>
               <Link href="/">Home</Link>
               <Link href="/dashboard">Dashboard</Link>
               <Link href="/repos">Repos</Link>
               <Link href="/non-followers">Non-Followers</Link>
               <Link href="/rate">Rate</Link>
            </div>
         </div>
      </div>
   </section>;
}
