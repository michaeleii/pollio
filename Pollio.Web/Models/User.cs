namespace Pollio.Web.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Email { get; set; } = null!;
    public List<Poll> Polls { get; set; } = [];
    public List<Vote> Votes { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
