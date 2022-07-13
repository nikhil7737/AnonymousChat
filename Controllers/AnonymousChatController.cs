using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AnonymousChat.DTO;
using AnonymousChat.Enums;
using AnonymousChat.Utils;
using Microsoft.AspNetCore.Mvc;

namespace AnonymousChat.Controllers
{
    public class AnonymousChatController : Controller
    {
        private static readonly Dictionary<string, WebSocket> d = new Dictionary<string, WebSocket>();
        [Route("chat/anonymous")]
        public async Task<IActionResult> AnonymousChat()
        {
            if (!HttpContext.WebSockets.IsWebSocketRequest)
            {
                return BadRequest("Only websocket request acceptable");
            }
            WebSocket connection = await HttpContext.WebSockets.AcceptWebSocketAsync();
            string anonymousName = await connection.GetMessage();
            var currentClient = new Client(connection, anonymousName);
            if (ConnectionManager.FreeClients.Count == 0)
            {
                ConnectionManager.FreeClients.Add(currentClient);
            }
            else
            {
                Client freeClient = ConnectionManager.FreeClients.Last();
                await Connect(currentClient, freeClient);
            }
            return Ok();
        }
        private async Task Connect(Client currentClient, Client freeClient)
        {
            var message = new Message
            {
                MessageType = MessageType.AnonymousUserFound,
            };
            byte[] byteArr = Encoding.UTF8.GetBytes(message.ToString());
            Task a = currentClient.Connection.SendAsync(byteArr, WebSocketMessageType.Text, true, CancellationToken.None);
            Task b = freeClient.Connection.SendAsync(byteArr, WebSocketMessageType.Text, true, CancellationToken.None);
            await Task.WhenAll(a, b);
            a = HandleChat(currentClient.Connection, freeClient.Connection);
            b = HandleChat(freeClient.Connection, currentClient.Connection);
            await Task.WhenAll(a, b);

            
            //Chat over
        }

        private async Task HandleChat(WebSocket sender, WebSocket receiver)
        {
            while (ConnectionUtils.AreConnectionsAlive(sender, receiver))
            {
                var byteArr = new byte[1000];
                WebSocketReceiveResult receiveResult = await sender.ReceiveAsync(byteArr, CancellationToken.None);
                byteArr = byteArr.Take(receiveResult.Count).ToArray();
                await receiver.SendAsync(byteArr, WebSocketMessageType.Text, true, CancellationToken.None);
            }
        }
    }
}
