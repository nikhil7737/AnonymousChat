import React, { useState } from "react";
import "./Home.css";
import MessagePage from "../MessageView/MessagePage";
import chatIcon from "../../Images/chatIcon.png";
import { wsConnectUrl, messageType } from "../../Utils";

let ws, userName, pairedUser;

const Home = () => {
  const [hasChatStarted, setHasChatStarted] = useState(false);

  if (hasChatStarted) {
    const headerInfo = {
      messagePageTitle: pairedUser,
      description: "just chatting",
    };
    return <MessagePage ws={ws} headerInfo={headerInfo} />;
  }

  const startChat = () => {
    const inputElement = document.querySelector(".inputName");
    userName = inputElement.value;
    if (userName === "") {
      alert("You must enter a name");
      return;
    }
    console.log(wsConnectUrl);
    ws = new WebSocket(wsConnectUrl);
    sendName(ws, userName);
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.type === messageType.anonymousUserFound) {
        pairedUser = message.text;
        setHasChatStarted(true);
      }
    };
  };

  const sendName = (ws, userName) => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          text: userName,
          type: messageType.textMessage,
        })
      );
    };
  };

  return (
    <div className="homeContainer">
      <div className="home">
        <img
          width="130px"
          height="110px"
          className="chatIcon"
          src={chatIcon}
          alt="chatIcon"
        />
        <p className="homePageTitle">Talk Anonymously</p>
        <p className="homePageDesc">Share your views with anonymous people</p>
        <input
          className="inputName"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="inputName startChatButton" onClick={startChat}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
