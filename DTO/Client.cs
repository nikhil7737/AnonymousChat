using System.Net.WebSockets;

namespace AnonymousChat.DTO
{
    public class Client
    {
        public WebSocket Connection { get; }
        public string Name { get; }
        public Client(WebSocket connection, string name) {
            Connection = connection;
            Name = name;
        }
    }
}