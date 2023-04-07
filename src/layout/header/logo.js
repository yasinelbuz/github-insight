//image
import logo from '@/assets/GitHubInsight__Logo.png';

//next
import Image from 'next/image';
import Link from 'next/link';

//styles
import styles from './styles.module.scss';

export default function Logo() {
   return <div className={styles.logo}>
      <Link href="/">
         <Image
            src={logo}
            alt="Github Insight Logo"
         />
      </Link>
   </div>;
}
