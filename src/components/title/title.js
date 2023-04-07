import styles from './styles.module.scss';

export default function Title({ h1, p }) {
   return <div className={styles.title}>
      <h2>{h1}</h2>
      <p>{p}</p>
   </div>;
}
