using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
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
            Message message = await connection.GetMessage();
            string anonymousName = message.Text;
            var currentClient = new Client(connection, anonymousName);
            if (ConnectionManager.FreeClients.Count == 0)
            {
                ConnectionManager.FreeClients.Add(currentClient);
                await HandleChat(currentClient.Connection);
            }
            else
            {
                Client freeClient = ConnectionManager.FreeClients.Last();
                ConnectionManager.FreeClients.Remove(freeClient);
                ConnectionManager.AddPairing(currentClient.Connection, freeClient.Connection);
                await Connect(currentClient, freeClient);
            }
            return Ok();
        }
        private async Task Connect(Client currentClient, Client freeClient)
        {
            var message = new Message
            {
                Type = MessageType.AnonymousUserFound,
            };
            Task sendTask1 = currentClient.Connection.SendMessage(message);
            Task sendTask2 = freeClient.Connection.SendMessage(message);
            await Task.WhenAll(sendTask1, sendTask2);
            await HandleChat(currentClient.Connection);
        }

        private async Task HandleChat(WebSocket sender)
        {
            WebSocket receiver = null;
            while (ConnectionUtils.AreConnectionsAlive(sender, receiver))
            {
                Message message = await sender.GetMessage();
                if (receiver == null)
                {
                    receiver = ConnectionManager.GetPairedUser(sender);
                }
                if (message.Type == MessageType.EndAnonymousChatRequested)
                {
                    await receiver.SendMessage(new Message
                    {
                        Type = MessageType.AnonymousChatEnded
                    });
                    break;
                }
                else
                {
                    await receiver.SendMessage(message);
                }
            }
        }
    }
}