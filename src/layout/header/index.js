//core
import React, { useEffect } from "react";

//styles
import styles from './styles.module.scss';

//components
import Search from "@/components/search/Search";

//next
import Link from "next/link";

//services
import { useGetRateLimitQuery } from "@/services/rate";

export default function Header() {

   return <>
      <header className={styles.header}>
         <div>
            <div className="container">
               <nav className={styles.navigation}>
                  <Link href="/">Home</Link>
                  <Link href="/repos">Repos</Link>
                  <Link href="/non-followers">Non-Followers</Link>
               </nav>
            </div>
         </div>
         <Search />
      </header >
   </>
}
