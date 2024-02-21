using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;

public class Poll
{
    [Key]
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public string UserId { get; set; } = null!;
    public virtual User User { get; set; } = null!;
    public virtual ICollection<Option> Options { get; set; } = [];
}
