const loc = window.location;
export const wsConnectUrl = `${loc === "http:" ? "ws:" : "wss:"}//${
  loc.host
}/chat/anonymous/`;

export const messageType = {
  anonymousUserFound: 1,
  endAnonymousChatRequested: 2,
  anonymousChatEnded: 3,
  textMessage: 4,
  ping: 5,
};

export const selfUserId = 1;
export const pingInterval = 52000;