namespace Pollio.Web.Models;

public class Vote
{
    public int VoteId { get; set; }
    public Poll Poll { get; set; } = null!;
    public int PollId { get; set; }
    public User User { get; set; } = null!;
    public int UserId { get; set; }
    public Option Option { get; set; } = null!;
    public int OptionId { get; set; }
    public DateTime CreatedAt { get; set; }
}
