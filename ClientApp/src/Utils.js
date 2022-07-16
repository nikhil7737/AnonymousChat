const loc = window.location;
export const wsConnectUrl = `${loc === "http:" ? "ws:" : "wss:"}//${
  loc.host
}/chat/anonymous/`;

export const messageType = {
  anonymousUserFound: 1,
  endAnonymousChatRequested: 2,
  anonymousChatEnded: 3,
  textMessage: 4,
};

export const selfUserId = 1;