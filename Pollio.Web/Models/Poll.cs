namespace Pollio.Web.Models;

public class Poll
{
    public int PollId { get; set; }
    public string Question { get; set; } = null!;
    public User Creator { get; set; } = null!;
    public List<Option> Options { get; set; } = [];
    public List<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
