using System.Collections.Generic;
using System.Net.WebSockets;
using AnonymousChat.DTO;

namespace AnonymousChat
{
    public static class ConnectionManager
    {
        public static readonly List<Client> FreeClients = new List<Client>();
    }
}