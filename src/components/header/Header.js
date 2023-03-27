import React from "react";
import styles from './header.module.scss';
import Search from "@/components/search/Search";

export default function Header() {
   return <>
      <header className={styles.header}>
         <Search />
      </header>
   </>
}
