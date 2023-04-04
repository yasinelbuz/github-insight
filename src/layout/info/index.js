//core
import React, { useEffect } from "react";

//styles
import styles from './styles.module.scss'

//services
import { useGetRateLimitQuery } from "@/services/rate";

//icons
import { StarIcon } from "@/icons";

export default function Info() {

   const { data, refetch } = useGetRateLimitQuery();

   useEffect(() => {
      refetch();
   })

   let remaining = data?.rate?.remaining;
   let limit = data?.rate?.limit;

   return (<>
      <header className={styles.header}>
         <div className={styles.rate}>
            My remaining request count is <b>{remaining}</b> out of <b>{limit}</b>
         </div>
         <div>
            <a href={process.env.NEXT_PUBLIC_PROJECT_GITHUB_URL} target="_blank" className={styles.star_github_btn}><StarIcon /> Star on Github</a>
         </div>
      </header>
   </>);
}
