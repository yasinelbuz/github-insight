import React from 'react';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/stats/StatsCard';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/FusionChart'),
    { ssr: false }
);
import { useGetGithubUserByNameQuery, useGetGithubUserByReposQuery } from '@/services/users';
import { useSelector } from 'react-redux';
import UserCardContainer from './userCardContainer';
import FollowerCardContainer from './followerCardContainer';

export default function HomeContainer() {
    const { search } = useSelector((state) => state.users);
    const { data } = useGetGithubUserByNameQuery(search);
    const { data: reposData, isLoading } = useGetGithubUserByReposQuery(search);

    return (
        <>
            {!isLoading && <main>
                <StatsCard data={data} />
                <UserCardContainer />
                <FollowerCardContainer />
                <NextFusionCharts reposData={reposData} />
            </main>}
        </>
    );
}
