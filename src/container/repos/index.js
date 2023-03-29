import React from "react";
import Table from "@/components/table/table";
import { useGetGithubUserByReposQuery } from "@/services/users";
import { useSelector } from "react-redux";

export default function ReposContainer() {

   const { search } = useSelector(state => state.users);
   const { data: repos, isLoading } = useGetGithubUserByReposQuery(search);

   const tableHead = [
      { name: 'Repo name', sortable: true, width: "200px" },
      { name: 'Description' },
      { name: 'Star count', sortable: true },
      { name: 'Forks count', sortable: true },
      { name: 'Size', sortable: true },
      { name: 'Is Fork?', sortable: true },
      { name: 'Created at', sortable: true, width: "125px" },
      { name: 'Repo url' },
   ];

   const tableBody = repos.map(repo => ([
      <a href={repo.html_url} style={{ color: "#000", textDecoration: "underline" }} target="_blank">{repo.name}</a>,
      repo.description,
      repo.stargazers_count,
      repo.forks_count,
      repo.size,
      repo.fork ? "Yes" : "No",
      repo.created_at.slice(0, 10),
      <a href={repo.html_url} style={{ color: "#000", textDecoration: "underline" }} target="_blank">Repo</a>,
   ]));

   return <>
      <main>
         <section>
            <div className="container">
               {!isLoading ? <Table
                  searchable={true}
                  head={tableHead}
                  body={repos && tableBody}
               /> : "Loading"}
            </div>
         </section>
      </main>
   </>
}
