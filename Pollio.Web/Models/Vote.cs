namespace Pollio.Web.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public int PollId { get; set; }
        public Option Option { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}