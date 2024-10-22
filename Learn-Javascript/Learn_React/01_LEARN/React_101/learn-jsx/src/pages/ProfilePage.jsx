import React from "react";
import Menu from "../Components/Menu";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { facebbokID, youtubeId } = useParams();
  return (
    <div>
      <Menu />
      <h1>This Is Profile Page</h1>
      <p>Facebook = {facebbokID}</p>
      <p>Youtube = {youtubeId}</p>
    </div>
  );
};

export default ProfilePage;
