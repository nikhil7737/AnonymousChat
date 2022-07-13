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
        public static async Task<string> GetMessage(this WebSocket ws)
        {
            byte[] byteSegment = new byte[1000];
            var receiveResponse = await ws.ReceiveAsync(byteSegment, CancellationToken.None);
            return Encoding.UTF8.GetString(byteSegment, 0, receiveResponse.Count);
        }
        public static async Task SendMessage(this WebSocket ws, Message message)
        {
            string serializedMessage = JsonSerializer.Serialize(message);
            byte[] byteArr = Encoding.UTF8.GetBytes(serializedMessage);
            await ws.SendAsync(byteArr, WebSocketMessageType.Text, true, CancellationToken.None);
        }
    }
}