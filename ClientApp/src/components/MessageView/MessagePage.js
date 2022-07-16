import React, { useState } from "react";
import MessagePageHeader from "./MessagePageHeader";
import Messages from "./Messages";
import MessageSender from "./MessageSender";
import defaultUserPic from "../../Images/defaultUser.jpeg";

const MessagePage = (props) => {
  const { headerInfo, ws } = props;
  const [messages, setMessages] = useState(props.messages || []);
  headerInfo.profilePicUrl = headerInfo.profilePicUrl || defaultUserPic;

  return (
    <div>
      <MessagePageHeader {...headerInfo} />
      <Messages messages={messages} setMessages={setMessages} ws={ws} />
      <MessageSender
        ws={ws}
        addMessage={(message) =>
          setMessages([...messages, { ...message, isOwnMessage: true }])
        }
      />
    </div>
  );
};

export default MessagePage;
