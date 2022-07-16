import React from "react";
import { messageType, selfUserId } from "../../Utils";
import { SendButton } from "../Svgs";
import "./MessageSender.css";

const MessageSender = ({ws, addMessage}) => {
  const sendMessge = () => {
    const textMessage = document.querySelector(".textbox").value;
    if (textMessage !== "") {
      const message = {
        text: textMessage,
        type: messageType.textMessage
      };
      ws.send(JSON.stringify(message));
      addMessage({...message, senderId: selfUserId});
    }
  }
  return (
    <div className="messageSender">
      <TextArea className="message textbox"/>
      <SendButton onClick={sendMessge}/>
    </div>
  );
};

const TextArea = ({ text, className }) => {
  text = text || "";
  return <textarea className={className} defaultValue={text}></textarea>;
};

export default MessageSender;
