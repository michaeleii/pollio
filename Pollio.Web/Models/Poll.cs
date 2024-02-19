namespace Pollio.Web.Models;

public class Poll
{
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public User Author { get; set; } = null!;
    public int AuthorId { get; set; }
    public ICollection<Option> Options { get; set; } = [];
    public ICollection<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
