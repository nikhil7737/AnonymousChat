import React from "react";
import "./FindingUserLoader.css";
import findingUserLoader from "../../Images/findingUserLoader.gif";

const FindingUserLoader = () => {
  return (
    <div className="findingUserLoader">
      <div className="loaderWrapper">
        <p className="findingUserText">Hang On!</p>
        <p className="findingUserText font-27">Pairing You Up With Someone</p>
        <img className="loaderGif" src={findingUserLoader} alt="loader" />
      </div>
    </div>
  );
};

export default FindingUserLoader;
