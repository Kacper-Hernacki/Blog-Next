"use client";

import { useEffect, useState } from "react";

const RepoCard = ({ repoData }: any) => {

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white w-full md:w-96">
      <h3 className="text-xl font-semibold mb-2">
        <a
          href={repoData.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-all"
        >
          {repoData.full_name}
        </a>
      </h3>
      <p className="text-gray-700 mb-4">{repoData.description}</p>
      <div className="flex space-x-4 text-gray-600">
        <p>
          <span className="font-semibold">Stars:</span> {repoData.stargazers_count}
        </p>
        <p>
          <span className="font-semibold">Forks:</span> {repoData.forks_count}
        </p>
      </div>
    </div>

  );

};
function EmbeddedGithub() {
  const [repoData, setRepoData] = useState(null);
  const user = "Kacper-Hernacki";
  const repo = "100-days-of-web3-challenge-blockchain-free-materials";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error("Failed to fetch GitHub repo data:", error);
      }
    };

    fetchData();
  }, [user, repo]);
  return (
    <div className="bg-gray-800">
      <div className="w-full h-24 absolute bg-gradient-to-b from-gray-600" />
      <h1 className="absolute w-full text-center text-4xl font-bold p-6 text-white max-[800px]:pb-8 mb-8">Check
        repo from 100 days of web3 challenge</h1>
      <div className="grid place-items-center max-w-2xl p-6 mt-4 pb-8 mx-auto pt-28">
        {repoData ? <RepoCard repoData={repoData} /> : null}
      </div>
      <div className="w-full h-32 bg-gradient-to-t from-gray-600" />
    </div>
  );
}

export default EmbeddedGithub;

