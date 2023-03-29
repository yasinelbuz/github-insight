import styles from './table-mobile.module.scss';

export default function TableMobile({ head, body }) {
   return (
      <div className={styles.tableBox}>
         {body.map((items, index) => (
            <article key={index}>
               {items.map((item, key) =>
                  <div>
                     <h6>{head[key].name}</h6>
                     <p>{item}</p>
                  </div>
               )}
            </article>
         ))}
      </div>
   )
}