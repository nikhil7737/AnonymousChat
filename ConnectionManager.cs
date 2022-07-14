using System.Collections.Generic;
using System.Net.WebSockets;
using AnonymousChat.DTO;

namespace AnonymousChat
{
    public static class ConnectionManager
    {
        public static readonly List<Client> FreeClients = new List<Client>();
        private static readonly Dictionary<WebSocket, WebSocket> _userPairs = new Dictionary<WebSocket, WebSocket>();

        public static void AddPairing(WebSocket con1, WebSocket con2)
        {
            if (!_userPairs.ContainsKey(con1) && !_userPairs.ContainsKey(con2))
            {
                _userPairs[con1] = con2;
                _userPairs[con2] = con1;
            }
        }
        public static void RemovePairing(WebSocket con)
        {
            if (_userPairs.TryGetValue(con, out WebSocket pairedCon))
            {
                _userPairs.Remove(con);
                _userPairs.Remove(pairedCon);
            }
        }
        public static WebSocket GetPairedUser(WebSocket con)
        {
            if (_userPairs.TryGetValue(con, out WebSocket pairedCon))
            {
                return pairedCon;
            }
            return null;
        }
    }
}