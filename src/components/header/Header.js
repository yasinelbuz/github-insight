import React from "react";
import styles from './header.module.scss';
import Search from "@/components/search/Search";
import Link from "next/link";

export default function Header() {
   return <>
      <header className={styles.header}>
         <div>
            <div className="container">
               <nav className={styles.navigation}>
                  <Link href="/repos">Repos</Link>
                  <Link href="/repos">Follower</Link>
                  <Link href="/repos">Following</Link>
                  <Link href="/repos">Non-Followers</Link>
               </nav>

            </div>
         </div>
         <Search />
      </header>
   </>
}
