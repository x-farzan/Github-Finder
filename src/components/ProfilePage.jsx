import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import RecentRepos from "./RecentRepos";

const ProfilePage = () => {
  const { profile } = useLocation().state;
  const { repo } = useLocation().state;

  return (
    <div>
      <div className="grid grid-cols-3 relative">
        <div>{console.log(`profile ----- `, profile)}</div>
        <div>{console.log(`repos ----- `, repo)}</div>

        <RecentRepos repos={repo} />
      </div>
    </div>
  );
};

export default ProfilePage;
