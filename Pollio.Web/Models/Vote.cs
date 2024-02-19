namespace Pollio.Web.Models;

public class Vote
{
    public int VoteId { get; set; }
    public int PollId { get; set; }
    public int UserId { get; set; }
    public int OptionId { get; set; }
    public virtual Poll Poll { get; set; } = null!;
    public virtual User User { get; set; } = null!;
    public virtual Option Option { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}
