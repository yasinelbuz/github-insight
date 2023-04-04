import { useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa"
import { useMediaQuery } from '@react-hook/media-query'
import TableMobile from "./table-mobile";
import styles from './table.module.scss';


export default function Table({ head, body, searchable }) {

   const isMobile = useMediaQuery('(max-width: 600px)')

   function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
   }


   const [sorting, setSorting] = useState(false)
   const [search, setSearch] = useState('')
   const filteredData = body && body.filter(
      items => items.some(
         item => ((item?.key || item?.props?.searchableText || item) || (item !== "null")).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
      )
   ).sort((a, b) => {
      if (sorting?.orderBy === 'asc') {
         if (typeof b[sorting.key] === "number") {
            return a[sorting.key] - b[sorting.key];
         }
         return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
      }
      if (sorting?.orderBy === 'desc') {
         if (typeof b[sorting.key] === "number") {
            return b[sorting.key] - a[sorting.key];
         }
         return b[sorting.key].toString().localeCompare(a[sorting.key])
      }
   })

   if (!body || body?.length === 0) {
      return (
         <div className={styles["no-data"]}>Gösterilecek veri bulunmuyor.</div>
      )
   }

   return (
      <>
         {searchable && (
            <div className={styles.searchable}>
               <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="text"
                  placeholder="Tabloda ara"
               />
               {sorting && (
                  <button
                     onClick={() => setSorting(false)}
                  >
                     Sıralamayı İptal Et
                  </button>
               )}
            </div>
         )}
         {isMobile && <TableMobile head={head} body={filteredData} />}
         {!isMobile && (
            <div className={styles["table-container"]}>
               <table>
                  <thead>
                     <tr>
                        {head.map((h, key) => (
                           <th
                              width={h?.width}
                              key={key}>
                              <div>
                                 {h.name}
                                 {h.sortable && (
                                    <button onClick={() => {
                                       if (sorting?.key === key) {
                                          setSorting({
                                             key,
                                             orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                                          })
                                       } else {
                                          setSorting({
                                             key,
                                             orderBy: 'asc'
                                          })
                                       }
                                    }}>
                                       {sorting?.key === key && (
                                          sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
                                       )}
                                       {sorting?.key !== key && <FaSort size={14} />}
                                    </button>
                                 )}
                              </div>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {filteredData.map((items, key) => (
                        <tr key={key}>
                           {items.map((item, key) => (
                              <td
                                 key={key}>
                                 {Array.isArray(item) ? (
                                    <div>
                                       {item}
                                    </div>
                                 ) : item}
                              </td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}
      </>
   )
}