namespace Pollio.Web.Models;
public class Option
{
    public int OptionId { get; set; }
    public string Text { get; set; } = null!;
    public int PollId { get; set; }
    public virtual Poll Poll { get; set; } = null!;
    public virtual ICollection<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }

}
