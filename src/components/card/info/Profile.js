import React from 'react';
import UserCard from '@/components/userCard';
import styles from '@/components/card/info/styles/Profile.module.scss';
import FollowerCard from '@/components/follow/followerCard';


const Profile = ({ data }) => {
    return (
        <section>
            <div className="container">
                <div className={styles.profile}>
                    <UserCard data={data} />
                </div>
                <div style={{ height: "400px", backgroundColor: "#fff", marginTop: "10px", overflow: "auto", padding: "20px" }}>
                    <FollowerCard />
                </div>
            </div>
        </section >
    );
};

export default Profile;
