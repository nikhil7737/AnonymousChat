using System.Text.Json.Serialization;
using AnonymousChat.Enums;


namespace AnonymousChat.DTO
{
    public class Message
    {
        [JsonPropertyName("text")]
        public string Text { get; set; }
        [JsonPropertyName("type")]
        public MessageType Type { get; set; }
    }
}
