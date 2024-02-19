using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pollio.Web.Models;

public class Vote
{
    [Key, Column(Order = 0)]
    public int UserId { get; set; }

    [Key, Column(Order = 1)]
    public int OptionId { get; set; }
    public DateTime CreatedAt { get; set; }
    public User User { get; set; } = null!;
    public Option Option { get; set; } = null!;
}
