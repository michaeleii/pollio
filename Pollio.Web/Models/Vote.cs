namespace Pollio.Web.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public Poll Poll { get; set; } = null!;
        public User User { get; set; } = null!;
        public Option Option { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}