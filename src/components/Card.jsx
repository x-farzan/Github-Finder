import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ProfileContext, RepoContext } from "./SearchBar";

const Card = () => {
  const profile = useContext(ProfileContext);
  const repos = useContext(RepoContext);
  const navigate = useNavigate();
  return (
    <div className="my-4 mx-2 flex justify-center">
      {/* <ProfileContext.Consumer>
        {(profile) => { */}
      {/* return ( */}
      <div className="border-2 border-gray-900 p-6 object-cover">
        <img src={profile.avatar_url} alt="" />
        <div>
          <span>{profile.login}</span>
        </div>
        {/* <RepoContext.Consumer> */}
        <button
          onClick={() =>
            navigate("/profile", {
              state: { profile: profile, repo: repos },
            })
          }
          className="border-2 border-gray-900 bg-gray-400 px-3 py-2 rounded"
        >
          Profile Detail
        </button>
        {/* </RepoContext.Consumer> */}
      </div>
      {/* ); */}
      {/* }}
      </ProfileContext.Consumer> */}
    </div>
  );
};

export default Card;
