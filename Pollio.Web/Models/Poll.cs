namespace Pollio.Web.Models;

public class Poll
{
    public int PollId { get; set; }
    public string Question { get; set; } = null!;
    public User User { get; set; } = null!;
    public int UserId { get; set; }
    public ICollection<Option> Options { get; set; } = [];
    public ICollection<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
