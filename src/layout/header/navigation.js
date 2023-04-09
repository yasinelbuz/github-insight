//styles
import styles from './styles.module.scss';

//next
import Link from "next/link";

export default function Navigation() {
   return <nav className={styles.navigation}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/repos">Repos</Link>
      <Link href="/non-followers">Non-Followers</Link>
      <Link href="/rate">Rate</Link>
   </nav>;
}
