import React from "react";
import styles from './style.module.scss';

export default function NoUserMessage() {
   return <div className={styles.no_user__message}>Gösterilecek başka kullanıcı kalmadı...</div>;
}
