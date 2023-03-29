import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/card/stats/StatsCard';
import Profile from '@/components/card/info/Profile';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/FusionChart'),
    { ssr: false }
);
import { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery, useGetGithubUserByReposQuery } from '@/services/users';
import { useSelector } from 'react-redux';

export default function HomeContainer() {
    const { search } = useSelector((state) => state.users);
    const { data, isError } = useGetGithubUserByNameQuery(search);
    const { data: reposData, isLoading } = useGetGithubUserByReposQuery(search);

    return (
        <>
            <Head>
                <title>Github Info</title>
                <meta name="description" content="Find github user info" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {!isLoading && <main>
                <StatsCard data={data} />
                <Profile data={data} />
                <NextFusionCharts reposData={reposData} />
            </main>}
        </>
    );
}
