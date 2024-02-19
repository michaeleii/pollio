using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;

public class User
{
    [Key]
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public virtual ICollection<Poll> Polls { get; set; } = [];
    public virtual ICollection<Vote> Votes { get; set; } = [];
}
