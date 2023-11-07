import React, { useState, useEffect } from "react";
import Axios from "axios";
import baseURL from "./Github";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";
import { RepoData } from "./RepoData";

export default function GitHubCards() {
  const api_key = process.env.REACT_APP_API_KEY;

  const repoList = [
    baseURL(`front-end`),
  ];

  const [repoData, setRepoData] = useState<RepoData[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchRepoData = async (url: string) => {
      await Axios.get(url, {
        headers: {
          Authorization: `token ${api_key}`,
        },
        signal: signal
      }).then((res) => {
        if (repoData.includes(res.data)) return;
        setRepoData((currentRepoData) =>
          [...currentRepoData, res.data].reduce((u, i) => u.includes(i) ? u : [...u, i], [])
        );
      })
      .catch(console.log);
    };
    for (let url of repoList) {
      fetchRepoData(url);
    }
    return () => {controller.abort();};
  }, []);

  repoData.sort((a, b) =>
    a.stargazers_count > b.stargazers_count
      ? -1
      : b.stargazers_count > a.stargazers_count
        ? 1
        : 0
  );

  return (
    <Grid container spacing={1}>
      {repoData.map((data, i) => (
        <RepoCard repo={data} key={i} />
      ))}
    </Grid>
  );
}
