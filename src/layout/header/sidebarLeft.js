
//components
import Search from '@/components/search';
import HamburgerBox from './hamburgerBox';
import Logo from './logo';
import Navigation from './navigation';

//styles
import styles from './styles.module.scss';

export default function SidebarLeft() {
   return <>
      {/* Sidebar Left */}
      <div className={styles.sidebar__left}>
         <HamburgerBox />
         <Logo />
         <div className={styles.serach__box}>
            <Search />
         </div>
         <Navigation />
      </div>
   </>;
}
