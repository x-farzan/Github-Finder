import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecentRepos = (props) => {
  const { repos } = props;
  const { profile } = props;

  let navigate = useNavigate();

  console.log(`repo check ----- `, repos);

  return (
    <div className="my-8 mx-16">
      {/* general div starting point */}
      <div className="text-left">
        {/* Back to search button section */}
        <button
          className="mx-0 p-2 text-start text-lg text-white border-2 border-gray-800 bg-gray-800 rounded-md"
          onClick={() => {
            navigate("/", {
              state: { profile: profile },
            });
          }}
        >
          Back To Search
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-1">
        {/* FIrst grid */}
        <div className="border-2 p-6">
          <div className="flex justify-center">
            <img
              className="rounded-full h-48"
              src={profile.avatar_url}
              alt=""
            />
          </div>
          <h5 className="mt-1 text-center text-2xl">{profile.name}</h5>
        </div>
        {/* Second grid */}
        <div className="border-2 p-4">
          <h2 className="text-start text-xl">Bio</h2>
          <h3 className="text-start text-md leading-10">{profile.bio}</h3>
          <div className="text-start">
            <button
              className="mx-0 p-2 text-start text-lg text-white border-2 border-gray-800 bg-gray-800 rounded-md"
              onClick={() => {
                const url = profile.html_url;
                window.open(url, "_blank");
              }}
            >
              View Github Profile
            </button>
          </div>
          <div className="flex justify-start">
            <div className="text-start font-bold">Username : </div>
            <div>{profile.login}</div>
          </div>
        </div>
      </div>

      <div className="m-0 p-4 border-2 flex justify-center gap-12 bg-gray-800">
        <div className="text-white">Followers: {profile.followers}</div>
        <div className="text-white">Following: {profile.following}</div>
        <div className="text-white">Public Repos: {profile.public_repos}</div>
        <div className="text-white">Public Gist: {profile.public_gists}</div>
      </div>

      <div>
        {/* Repositro mapping section */}
        <div className="text-left text-2xl">
          <h1>Recent Repos</h1>
        </div>
        <div className="my-4">
          <div className="grid grid-cols-3 gap-6 flex justify-center">
            {repos.map((repo) => (
              <div
                className="border-2 bg-gray-300 pt-4 p-20 border-2 border-gray-900 rounded-md"
                key={repo.id}
              >
                <div className="underline underline-offset-4 ">{repo.name}</div>
                <div className="pt-2 inline-block align-bottom">
                  <button
                    className="mx-0 p-2 text-start text-lg text-white border-2 border-gray-800 bg-gray-800 rounded-md"
                    onClick={() => {
                      const url = repo.svn_url;
                      window.open(url, "_blank");
                    }}
                  >
                    View Repo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRepos;
