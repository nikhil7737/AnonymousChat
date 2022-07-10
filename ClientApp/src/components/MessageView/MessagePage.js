import React from "react";
import MessagePageHeader from "./MessagePageHeader";
import Messages from "./Messages";
import MessageSender from "./MessageSender";

const MessagePage = ({ messages }) => {
  return (
    <div>
      <MessagePageHeader />
      <Messages />
      <MessageSender />
    </div>
  );
};

export default MessagePage;
