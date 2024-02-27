using Pollio.Web.DTO;

namespace Pollio.Web.Models;

public static class EntityExtensions
{
    public static PollDTO ToDTO(this Poll p)
    {
        return new PollDTO
        {
            Id = p.Id,
            Question = p.Question,
            CreatedAt = p.CreatedAt,

            User = p.User.ToDTO(),

            TotalVotes = p.Options.Sum(o => o.Votes.Count),

            Options = p.Options
                .OrderBy(o => o.Id)
                .Select(o => o.ToDTO())
                .ToList(),
        };
    }

    public static UserDTO ToDTO(this User u)
    {
        return new UserDTO
        {
            Id = u.Id,
            Name = u.Name,
        };
    }

    public static PollDTO.OptionDTO ToDTO(this Option o)
    {
        return new PollDTO.OptionDTO
        {
            Id = o.Id,
            Text = o.Text,
            CreatedAt = o.CreatedAt,
            Votes = o.Votes.Count,
            AllVotes = o.Votes.Select(v => v.UserId).ToList(),
        };
    }
}