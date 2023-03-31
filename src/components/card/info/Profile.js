import React from 'react';
import UserCard from './UserCard';
import styles from '@/components/card/info/styles/Profile.module.scss';
import FollowCard from '@/components/follow/followerCard';


const Profile = ({ data }) => {
    return (
        <section>
            <div className="container">
                <div className={styles.profile}>
                    <UserCard data={data} />
                </div>
                <div style={{ height: "400px", backgroundColor: "#fff", marginTop: "10px", overflow: "auto", padding: "20px" }}>
                    <FollowCard />
                </div>
            </div>
        </section >
    );
};

export default Profile;
