namespace Pollio.Web.DTO;

public class PollDTO
{
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public UserDTO User { get; set; } = null!;

    public List<OptionDTO> Options { get; set; } = [];

    public class UserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }

    public class OptionDTO
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}
