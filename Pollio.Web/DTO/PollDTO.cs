namespace Pollio.Web.DTO;

public class PollDTO
{
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public UserDTO User { get; set; } = null!;

    public class UserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}
