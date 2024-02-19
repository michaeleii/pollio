using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;
public class Option
{
    [Key]
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public int PollId { get; set; }
    public virtual Poll Poll { get; set; } = null!;
    public virtual ICollection<Vote> Votes { get; set; } = [];

}
