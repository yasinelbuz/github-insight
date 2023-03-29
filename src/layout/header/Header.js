import React from "react";
import styles from './header.module.scss';
import Search from "@/components/search/Search";
import Link from "next/link";
import { useGetRateLimitQuery } from "@/services/rate";

export default function Header() {

   const { data, isLoading } = useGetRateLimitQuery();

   console.log(process.env.NEXT_PUBLIC_DENEME);

   return <>
      <header className={styles.header}>
         <div>
            <div className="container">
               <nav className={styles.navigation}>
                  <Link href="/">Home</Link>
                  <Link href="/repos">Repos</Link>
                  <Link href="/repos">Follower</Link>
                  <Link href="/repos">Following</Link>
                  <Link href="/repos">Non-Followers</Link>
               </nav>
            </div>
         </div>
         <Search />
         {!isLoading && <div style={{ position: "absolute", left: 0, top: 0, fontSize: "2rem", backgroundColor: "#fff" }}> {data?.rate?.remaining}/{data?.rate?.limit} istek kaldı</div>}
      </header >
   </>
}
