//components
import Title from '../title/title';
import StatsCardItem from './StatsCartdtem';

//styles
import styles from './styles.module.scss'

//icons
import { Repos, Followers, Following, Gists } from '@/icons'

const StatsCard = ({ data }) => {
    return (
        <section>
            <div className="container container__inner">
                <Title h1="User Statistics" p="GitHub User Information: Repositories, Followers, Following, and Gists" />
                <div className={styles['stats-container']}>
                    <StatsCardItem icon={<Repos />} text='repos' num={data?.public_repos} />
                    <StatsCardItem style={{ backgroundColor: "#262A56" }} icon={<Followers />} text='followers' num={data?.followers} />
                    <StatsCardItem icon={<Following />} text='following' num={data?.following} />
                    <StatsCardItem style={{ backgroundColor: "#262A56" }} icon={<Gists />} text='gists' num={data?.public_gists} />
                </div>

            </div>
        </section>
    );
};

export default StatsCard;
