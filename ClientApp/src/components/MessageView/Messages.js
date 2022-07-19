import React, { useEffect } from "react";
import { messageType, pingInterval } from "../../Utils";
import "./Messages.css";

let callbackId;

const Messages = (props) => {
  // messages = [
  //     {
  //         text: "text",
  //         senderId: 34,
  //         senderName: "name"
  //     }
  // ]

  useEffect(() => {
    const messageContainer = document.querySelector(".messages");
    const lastMessage = messageContainer.lastChild?.lastChild;
    lastMessage?.scrollIntoView({ behavior: "smooth", block: "end" });
    clearInterval(callbackId);
    callbackId = setInterval(() => {
      ws.send(
        JSON.stringify({
          type: messageType.ping,
        })
      );
    }, pingInterval);
  });

  const { messages, setMessages, ws } = props;
  ws.onmessage = (e) => {
    const message = JSON.parse(e.data);
    if (message.type === messageType.anonymousChatEnded) {
      alert("chat ended. Do you want to chat again");
      return;
    }
    setMessages([...messages, message]);
  };

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

  let startInd = 0;
  return (
    <div className="messages">
      {groupedMessages.map((group) => {
        startInd += group.messages.length;
        return (
          <Message {...group} startInd={startInd - group.messages.length} />
        );
      })}
    </div>
  );
};

const Message = (props) => {
  const { messages, sender, startInd } = props;
  const senderId = sender.id;
  const senderName = sender.name;
  const isOwnMessage = messages[0].isOwnMessage;
  return (
    <div className={`messageGroup${isOwnMessage ? " ownMessageGroup" : ""}`}>
      {!isOwnMessage && <div className="senderName">{senderName}</div>}
      {messages.map((message, ind) => (
        <div
          className={`message ${isOwnMessage ? "ownMessage" : "notOwnMessage"}`}
          key={startInd + ind}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Messages;
