import React from "react";

//styles
import styles from './styles.module.scss';

//components
import Search from "@/components/search";
import Navigation from "./navigation";

//redux
import { useSelector } from "react-redux";

export default function MobileMenu() {

   const { isOpenMobileMenu } = useSelector((state) => state.theme);

   return (
      <>
         {isOpenMobileMenu && <div className={styles.mobile__menu}>
            <section>
               <div className={styles.search__box}>
                  <Search style={{ width: "100%" }} />
               </div>
               <Navigation />
            </section>
         </div>}

      </>
   );
}
