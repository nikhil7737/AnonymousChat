import React from "react";
import "./Chat.css";

const ChatList = (props) => {
  return (
    <div className="chatUsers">
      {props.chats.map((chat) => (
        <ChatItem {...chat} />
      ))}
    </div>
  );
};

const ChatItem = (props) => {
  const { userName, userId, lastMessage, lastMessageTime, profilePicUrl } =
    props;
  return (
    <div className="chatUser">
      <img
        className="profilePic"
        src={profilePicUrl}
        width="60px"
        height="60px"
        alt="profile pic"
      />
      <div className="nameMsgBlock">
        <div className="userName">{userName}</div>
        <div className="lastMessage">{lastMessage}</div>
      </div>
      <div className="lastMessageTime">{lastMessageTime}</div>
    </div>
  );
};

export default ChatList;
