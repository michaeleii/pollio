using System.ComponentModel.DataAnnotations;

namespace Pollio.Web.Models;

public class User
{
    [Key]
    public string Id { get; set; } = null!;
    public string Avatar { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public virtual ICollection<Poll> Polls { get; set; } = [];
    public virtual ICollection<Vote> Votes { get; set; } = [];
}
