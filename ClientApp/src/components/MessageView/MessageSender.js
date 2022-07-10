import React from "react";
import { SendButton } from "../Svgs";
import "./MessageSender.css";

const MessageSender = () => {
  return (
    <div className="messageSender">
      <TextArea className="message textbox"/>
      <SendButton />
    </div>
  );
};

const TextArea = ({ text, className }) => {
  text = text || "";
  return <textarea className={className}>text</textarea>;
};

export default MessageSender;
