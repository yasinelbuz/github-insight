import React, { useState } from "react";
import Table from "@/components/table/table";
import styles from '@/components/table/table.module.scss'
import { useGetGithubUserByReposQuery } from "@/services/users";
import { useSelector } from "react-redux";

export default function ReposContainer() {

   const { searchUser } = useSelector(state => state.users);
   const { data: repos, isLoading, isSuccess, isFetching } = useGetGithubUserByReposQuery(searchUser);

   return <>
      <main>
         <section>
            <div className="container">
               {!isLoading ? <Table
                  searchable={true}
                  head={[
                     { name: 'Repo name', sortable: true, width: "200px" },
                     { name: 'Description' },
                     { name: 'Star count', sortable: true },
                     { name: 'Forks count', sortable: true },
                     { name: 'Size', sortable: true },
                     { name: 'Is Fork?', sortable: true },
                     { name: 'Created at', sortable: true, width: "125px" },
                     { name: 'Repo url' },
                  ]}
                  body={repos && repos.map((repo, key) => ([
                     <a href={repo.html_url} style={{ color: "#000", textDecoration: "underline" }} target="_blank">{repo.name}</a>,
                     repo.description,
                     repo.stargazers_count,
                     repo.forks_count,
                     repo.size,
                     repo.fork ? "Yes" : "No",
                     repo.created_at.slice(0, 10),
                     <a href={repo.html_url} style={{ color: "#000", textDecoration: "underline" }} target="_blank">Repo</a>,
                  ]))}
               /> : "LoadiRg"}
            </div>
         </section>
      </main >
   </>
}
