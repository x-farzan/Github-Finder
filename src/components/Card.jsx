import React from "react";
import Button from "./Button";
import { ProfileContext, RepoContext } from "./SearchBar";

const Card = () => {
  return (
    <div className="my-4 mx-2 flex justify-center">
      <ProfileContext.Consumer>
        {(profile) => {
          return (
            <div className="border-2 border-gray-900 p-6 object-cover">
              <img src={profile.avatar_url} alt="" />
              <div>
                <span>{profile.login}</span>
              </div>
              <Button buttonName="Profile detail" buttonType="Profile detail" />
            </div>
          );
        }}
      </ProfileContext.Consumer>
    </div>
  );
};

export default Card;
