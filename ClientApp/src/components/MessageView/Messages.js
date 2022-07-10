import React from "react";
import "./Messages.css";
const Messages = ({ messages }) => {
  // messages = [
  //     {
  //         text: "text",
  //         senderId: 34,
  //         senderName: "name"
  //     }
  // ]

  if (!messages || messages.length === 0) {
    return null;
  }
  let prevMessageSenderId = 0;
  let groupedMessages = [];
  for (const message of messages) {
    if (message.senderId !== prevMessageSenderId) {
      const newGroup = {
        messages: [message],
        sender: {
          id: message.senderId,
          name: message.senderName,
        },
      };
      groupedMessages.push(newGroup);
      prevMessageSenderId = message.senderId;
    } else {
      groupedMessages[groupedMessages.length - 1].messages.push(message);
    }
  }
  return (
    <div className="messages">
      {groupedMessages.map((group) => (
        <Message {...group} />
      ))}
    </div>
  );
};

const Message = (props) => {
  const { messages, sender } = props;
  const senderId = sender.id;
  const senderName = sender.name;
  const isOwnMessage = messages[0].isOwnMessage;
  return (
    <div className={`messageGroup${isOwnMessage ? " ownMessageGroup" : ""}`}>
      {!isOwnMessage && <div className="senderName">{senderName}</div>}
      {messages.map((message) => (
        <div
          className={`message ${isOwnMessage ? "ownMessage" : "notOwnMessage"}`}
          key={message.id}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Messages;
