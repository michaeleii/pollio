namespace Pollio.Web.DTO;

public class UserDTO
{
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}
