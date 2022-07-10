import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home/Home";
import Chats from "./components/ListView/Chats";
import MessagePage from "./components/MessageView/MessagePage";

const chats = [
  {
    userName: "Nikhl rathore",
    userId: 34,
    profilePicUrl:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=75",
    lastMessage: "How are yut",
    lastMessageTime: "2 hrs ago",
  },
  {
    userName: "Nikhl rathore",
    userId: 34,
    profilePicUrl:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=75",
    lastMessage: "How are yut",
    lastMessageTime: "2 hrs ago",
  },
  {
    userName: "Nikhl rathore",
    userId: 34,
    profilePicUrl:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=75",
    lastMessage: "How are yut",
    lastMessageTime: "2 hrs ago",
  },
  {
    userName: "Nikhl rathore",
    userId: 34,
    profilePicUrl:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=75",
    lastMessage: "How are yut",
    lastMessageTime: "2 hrs ago",
  },
];

const messages = [
  {
    text: "text",
    senderId: 34,
    senderName: "nikhil",
  },
  {
    text: "text",
    senderId: 34,
    senderName: "nikhl",
  },
  {
    text: "text",
    senderId: 34,
    senderName: "nikhil",
  },
  {
    text: "jflksdfj skdlf kdslf ksd kfds f",
    senderId: 35,
    senderName: "rahul",
    isOwnMessage: true,
  },
  {
    text: "text",
    senderId: 35,
    senderName: "rahul",
    isOwnMessage: true,
  },
  {
    text: "text fksdflsd flksd fks ",
    senderId: 35,
    senderName: "rahul",
    isOwnMessage: true,
  },
  {
    text: "text fkds flds lfksjd klf dsklf dskf sdkf skdf ksdf kds fksdf klds fksldf ksdlf sd",
    senderId: 34,
    senderName: "nikhl",
  },
  {
    text: "textklf ld fkds fkds jfklds fkdsjkldsjlfnikhl rahtoerei fdkfni tige lion ksi tand",
    senderId: 34,
    senderName: "nikhil",
  },
];

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chats" component={() => <Chats chats={chats} />} />
        <Route exact path="/messages" component={() => <MessagePage messages={messages} />} />
      </>
    );
  }
}
