import React from 'react';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/card/stats/StatsCard';
import Profile from '@/components/card/info/Profile';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/FusionChart'),
    { ssr: false }
);
import { useGetGithubUserByNameQuery, useGetGithubUserByReposQuery } from '@/services/users';
import { useSelector } from 'react-redux';

export default function HomeContainer() {
    const { search } = useSelector((state) => state.users);
    const { data } = useGetGithubUserByNameQuery(search);
    const { data: reposData, isLoading } = useGetGithubUserByReposQuery(search);

    return (
        <>
            {!isLoading && <main>
                <StatsCard data={data} />
                <Profile data={data} />
                <NextFusionCharts reposData={reposData} />
            </main>}
        </>
    );
}
