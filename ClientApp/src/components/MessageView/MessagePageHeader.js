import React from "react";
import "./MessagePageHeader.css";
import { LeftArrow } from "../Svgs";

const MessagePageHeader = (props) => {
  const { profilePicUrl, messagePageTitle, description } = props;
  return (
    <div className="messagePageHeader">
      <LeftArrow />
      <img
        width="60px"
        height="60px"
        alt="header img"
        className="messagePageheaderImg"
        src={profilePicUrl}
      ></img>
      <div>
        <p className="messagePageTitle">{messagePageTitle}</p>
        <p className="messagePageDesc">{description}</p>
      </div>
    </div>
  );
};

export default MessagePageHeader;
