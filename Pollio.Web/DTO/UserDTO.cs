namespace Pollio.Web.DTO;

public class UserDTO
{
    public string Id { get; set; } = null!;
    public string Avatar { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}
