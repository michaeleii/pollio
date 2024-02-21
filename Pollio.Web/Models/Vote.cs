namespace Pollio.Web.Models;

public class Vote
{
    public int Id { get; set; }
    public int OptionId { get; set; }
    public DateTime CreatedAt { get; set; }
    public string UserId { get; set; } = null!;
    public virtual User User { get; set; } = null!;
    public virtual Option Option { get; set; } = null!;
}
