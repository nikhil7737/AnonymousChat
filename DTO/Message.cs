using AnonymousChat.Enums;


namespace AnonymousChat.DTO
{
    public class Message
    {
        public string Text { get; set; }
        public MessageType Type { get; set; }
    }
}
