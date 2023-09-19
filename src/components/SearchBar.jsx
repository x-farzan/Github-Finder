import React, { createContext, useContext, useState } from "react";
import Button from "./Button";
import DisplayProfileCards from "./DisplayProfileCards";

export const ProfileContext = createContext()
export const RepoContext = createContext()

const SearchBar = () => {
  let [profile, setProfile] = useState();
  let [repos, setRepos] = useState();
  let [username, setUsername] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client_id = "5af8a4de99e432fe1512";
    const client_secret = "e1df3c88157d0946da88afc504298f42d9fe49a5";
    const repos_count = 10;
    const repos_sort = "created: asc";

    const profileResponse = await fetch(
      `https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${client_id}&client_secret=${client_secret}`
    );
    const profile = await profileResponse.json();
    setProfile(profile);
    const repos = await reposResponse.json();
    setRepos(repos);
  };

  const clearGlobalState = () => {
    setProfile();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Github Username"
          className="mt-5 p-2 border-2 border-gray-900 rounded"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <Button buttonName="Submit" buttonType="submit" />
      </form>

      <div>
        {profile ? (
          <button
            className="rounded border-2 border-gray-900 my-2 px-12 py-2 bg-red-600 text-white"
            onClick={clearGlobalState}
          >
            Clear All
          </button>
        ) : null}
      </div>
      <div>
        {profile ? (
          <ProfileContext.Provider value={profile}>
            <RepoContext.Provider value={repos}>
              <DisplayProfileCards />
            </RepoContext.Provider>
          </ProfileContext.Provider>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
