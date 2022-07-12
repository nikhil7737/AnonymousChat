using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

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
    }
}