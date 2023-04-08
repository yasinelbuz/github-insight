import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/stats/StatsCard';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/FusionChart'),
    { ssr: false }
);
import { useGetGithubUserByNameQuery } from '@/services/users';
import { useSelector } from 'react-redux';
import FollowerCardContainer from './followerCardContainer';
import { fetchAllReposData } from '@/helper/getAllData';

export default function DashBoardContainer() {

    const [repos, setRepos] = useState();
    const { search } = useSelector((state) => state.users);
    const { data, isLoading } = useGetGithubUserByNameQuery(search);


    useEffect(() => {
        fetchAllReposData(search).then(data => setRepos(data));
    }, [search]);


    return (
        <>
            {!isLoading && <main>
                <StatsCard data={data} />
                <FollowerCardContainer data={data} />
                <NextFusionCharts reposData={repos} />
            </main>}
        </>
    );
}
