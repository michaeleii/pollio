namespace Pollio.Web.DTO;
public class CreateVoteDTO
{
    public int PollId { get; set; }
    public int? OptionId { get; set; }
    public string UserId { get; set; } = null!;
}