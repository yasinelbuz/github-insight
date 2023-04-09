import React from "react";
import styles from './styles.module.scss';
import Logo from "../header/logo";

export default function Footer() {
   return <section className={styles.section__footer}>
      <div className={styles.footer__logo}>
         <Logo />
         <p>Github Insight provides users with a broader perspective by leveraging a limited service offered by the Github API.</p>
      </div>
   </section>;
}
