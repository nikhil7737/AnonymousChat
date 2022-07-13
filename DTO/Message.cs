using AnonymousChat.Enums;


namespace AnonymousChat.DTO
{
    public class Message
    {
        public string Text { get; set; }
        public MessageType MessageType { get; set; }
    }
}
