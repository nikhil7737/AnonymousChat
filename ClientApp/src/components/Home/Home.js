import React from "react";
import "./Home.css";
import chatIcon from "../../Images/chatIcon.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="home">
        <img width="130px" height="110px" class="chatIcon" src={chatIcon} alt="chatIcon" />
        <p className="homePageTitle">Talk Anonymously</p>
        <p className="homePageDesc">Share your views with anonymous people</p>
        <input
          className="inputName"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="inputName startChatButton">Continue</button>
      </div>
    </div>
  );
};

export default Home;
