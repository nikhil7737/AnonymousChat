using System.Linq;
using System.Net.WebSockets;

namespace AnonymousChat.Utils
{
    public static class ConnectionUtils
    {
        public static bool AreConnectionsAlive(params WebSocket[] connections)
        {
            return connections.All(con => con.State != WebSocketState.Closed && con.State != WebSocketState.CloseReceived);
        }
    }
}