using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AnonymousChat.DTO;
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
            await Task.Delay(10);
        }
    }
}
