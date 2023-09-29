import React from "react";

const RecentRepos = (repst) => {
  const { repos } = repst;
  console.log(`repos in recentrepo prop ----- `, repos);
  return (
    <div className="px-3 py-4 flex justify-center absolute">
      Recent Repos
      <div className="grid grid-cols-3 gap-6 flex justify-center ">
        {repos.map((repo) => (
          <div className="border-2 bg-gray-300 px-4 py-8 border-2 border-gray-900" key={repo.id}>
            {repo.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRepos;
