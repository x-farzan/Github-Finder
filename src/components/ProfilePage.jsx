import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import RecentRepos from "./RecentRepos";

const ProfilePage = () => {
  const { profile } = useLocation().state;
  const { repo } = useLocation().state;

  return (
    <div>
      <div >
        <RecentRepos repos={repo} profile={profile}/>
      </div>
    </div>
  );
};

export default ProfilePage;
