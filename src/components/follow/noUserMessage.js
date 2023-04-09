import React from "react";
import styles from './style.module.scss';

export default function NoUserMessage() {
   return <div className={styles.no_user__message}>There are no more users to display....</div>;
}
