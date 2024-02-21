namespace Pollio.Web.DTO;

public class PollDTO
{
    public int Id { get; set; }
    public string Question { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
    public UserDTO User { get; set; } = null!;

    public int TotalVotes { get; set; }

    public List<OptionDTO> Options { get; set; } = [];

    public class OptionDTO
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public int Votes { get; set; }

        public bool Selected { get; set; }
    }
}
