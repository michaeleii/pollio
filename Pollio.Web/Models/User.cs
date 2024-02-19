namespace Pollio.Web.Models;

public class User
{
    public int UserId { get; set; }
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Email { get; set; } = null!;
    public virtual ICollection<Poll> Polls { get; set; } = [];
    public virtual ICollection<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
