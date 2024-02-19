using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;

public class Poll
{
    [Key]
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public int UserId { get; set; }
    public virtual User User { get; set; } = null!;
    public virtual ICollection<Option> Options { get; set; } = [];
}
