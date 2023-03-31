import React from "react";
import styles from './style.module.scss'

export default function FollowersDiv({ children }) {
   return <div className={styles.followers}>
      {children}
   </div>;
}
