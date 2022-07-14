using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using AnonymousChat.DTO;

namespace AnonymousChat
{
    public static class MessageUtils
    {
        public static async Task<Message> GetMessage(this WebSocket ws)
        {
            var byteSegment = new byte[1000];
            WebSocketReceiveResult receiveResult = await ws.ReceiveAsync(byteSegment, CancellationToken.None);
            byteSegment = byteSegment.Take(receiveResult.Count).ToArray();
            return JsonSerializer.Deserialize<Message>(byteSegment);
        }
        public static async Task SendMessage(this WebSocket ws, Message message)
        {
            string serializedMessage = JsonSerializer.Serialize(message);
            byte[] byteArr = Encoding.UTF8.GetBytes(serializedMessage);
            await ws.SendAsync(byteArr, WebSocketMessageType.Text, true, CancellationToken.None);
        }
    }
}