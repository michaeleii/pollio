namespace Pollio.Web.Models;

public class Vote
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int OptionId { get; set; }
    public DateTime CreatedAt { get; set; }
    public virtual User User { get; set; } = null!;
    public virtual Option Option { get; set; } = null!;
}
