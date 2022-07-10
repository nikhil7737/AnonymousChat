import React from "react";
import MessagePageHeader from "./MessagePageHeader";
import Messages from "./Messages";
import MessageSender from "./MessageSender";

const MessagePage = ({ messages }) => {
  return (
    <div>
      <MessagePageHeader
        profilePicUrl="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=75"
        messagePageTitle="Covid 19"
        description="description"
      />
      {/* <Messages />
      <MessageSender /> */}
    </div>
  );
};

export default MessagePage;
