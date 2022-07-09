import React from "react";
import "./Chat.css";

const ChatList = props => {
  return (
    <div class="chatUsers">
      {props.chats.map(chat => (
        <ChatItem {...chat} />
      ))}
    </div>)
}

const ChatItem = props => {
  const { userName, userId, lastMessage, lastMessageTime, profilePicUrl } = props;
  return (
    <div className="chatUser">
      <img class="profilePic" src={profilePicUrl} width="60px" height="60px" />
      <div class="nameMsgBlock">
        <div class="userName">{userName}</div>
        <div class="lastMessage">{lastMessage}</div>
      </div>
      <div class="lastMessageTime">
        {lastMessageTime}
      </div>
    </div>
  )
}

export default ChatList;