using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;

public class Poll
{
    [Key]
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public ICollection<Option> Options { get; set; }
}
