import React, { Component } from "react";
import { Route } from "react-router";
import Chats from "./components/ListView/Chats";

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

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Route exact path="/chats" component={() => <Chats chats={chats} />} />
      </>
    );
  }
}
