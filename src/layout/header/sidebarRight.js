//styles
import styles from './styles.module.scss';

//redux
import { useSelector } from 'react-redux';

//services
import { useGetGithubUserByNameQuery } from '@/services/users';

export default function SidebarRight() {

   const { search } = useSelector(state => state.users);
   const { data } = useGetGithubUserByNameQuery(search)

   return <>
      {/* Sidebar Right */}
      <div className={styles.sidebar__right}>
         <span>{data?.login}</span>
         <img
            src={data?.avatar_url}
            width="50px"
            height="50px"
            alt="profil"
         />
      </div>
   </>;
}
