import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { profile } = useLocation().state;
  const { repo } = useLocation().state;

  return (
    <div>
      <div className="grid grid-cols-3">
        <div>{console.log(`profile ----- `, profile)}</div>
        <div>{console.log(`repos ----- `, repo)}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
