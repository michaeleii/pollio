namespace Pollio.Web.DTO;
public class CreatePollDTO
{
    public string Question { get; set; } = null!;
    public List<string> Options { get; set; } = [];
    public int UserId { get; set; }
}