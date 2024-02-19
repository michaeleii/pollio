namespace Pollio.Web.Models;
public class Option
{
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public Poll Poll { get; set; } = null!;
    public int PollId { get; set; }
    public ICollection<Vote> Votes { get; set; } = [];
    public int VoteCount { get; set; } // Calculated based on Votes
    public DateTime CreatedAt { get; set; }

}
