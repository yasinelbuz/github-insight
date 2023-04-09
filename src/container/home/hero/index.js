import React from "react";
import styles from './styles.module.scss';
import blockChart from '@/assets/block-chart.png'
import chart from '@/assets/chart.png'
import greenOk from '@/assets/green-ok.png'
import okDown from '@/assets/ok-down.png'
import Search from "@/components/search";

export default function Hero() {

   console.log(blockChart.src);

   return <>
      <section>
         <div className="container">
            <div className={styles.hero_container}>
               <div className={styles.hero_container_inner}>
                  <img src={blockChart.src} className={styles.blockChart} />
                  <img src={chart.src} className={styles.chart} />
                  <img src={greenOk.src} className={styles.greenOk} />
                  <img src={okDown.src} className={styles.okDown} />
                  <h1>Explore Your GitHub</h1>
                  <Search style={{
                     width: "100%", border: "1px solid #fff"
                  }} />
                  < p > <b>Analyze</b>, < b > Refine</b>, and <b>Boost</b> <br /> Your Github Account.</p>
               </div>
            </div>
         </div >
      </section >
   </>;
}
