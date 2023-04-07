//styles
import styles from './styles.module.scss';

//component
import SidebarLeft from "./sidebarLeft";
import SidebarRight from "./sidebarRight";
import MobileMenu from "./mobileMenu";

export default function Header() {

   return <>
      <header className={styles.header}>
         <section>
            <SidebarLeft />
            <SidebarRight />
         </section>
      </header>
      <MobileMenu />
   </>
}
