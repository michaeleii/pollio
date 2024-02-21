using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Packaging;
using Pollio.Web.DTO;
using Pollio.Web.Models;

namespace Pollio.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PollController(PollContext context) : ControllerBase
{
    private readonly PollContext _context = context;

    // GET: api/Poll
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PollDTO>>> GetPolls(string userId)
    {
        return await _context.Polls
            .Include(p => p.User)
            .Select(p => new PollDTO
            {
                Id = p.Id,
                Question = p.Question,
                CreatedAt = p.CreatedAt,

                User = new UserDTO
                {
                    Id = p.User.Id,
                    Name = p.User.Name,
                },

                TotalVotes = p.Options.Sum(o => o.Votes.Count),

                Options = p.Options.Select(o => new PollDTO.OptionDTO
                {
                    Id = o.Id,
                    Text = o.Text,
                    CreatedAt = o.CreatedAt,
                    Votes = o.Votes.Count,
                    Selected = o.Votes.Any(v => v.UserId == userId && v.OptionId == o.Id),
                })
                .OrderBy(o => o.Id)
                .ToList(),

            })
            .OrderByDescending(p => p.CreatedAt)
            .ToListAsync();
    }

    // GET: api/Poll/5
    [HttpGet("{id}")]
    public async Task<ActionResult<PollDTO>> GetPoll(int id, string userId)
    {
        var poll = await _context.Polls
                        .Include(p => p.User)
                        .Select(p => new PollDTO
                        {
                            Id = p.Id,
                            Question = p.Question,
                            CreatedAt = p.CreatedAt,

                            User = new UserDTO
                            {
                                Id = p.User.Id,
                                Name = p.User.Name,
                            },

                            TotalVotes = p.Options.Sum(o => o.Votes.Count),

                            Options = p.Options.Select(o => new PollDTO.OptionDTO
                            {
                                Id = o.Id,
                                Text = o.Text,
                                CreatedAt = o.CreatedAt,
                                Votes = o.Votes.Count,
                                Selected = o.Votes.Any(v => v.UserId == userId && v.OptionId == o.Id),
                            })
                            .OrderBy(o => o.Id)
                            .ToList(),

                        }).Where(p => p.Id == id).FirstOrDefaultAsync();

        if (poll == null)
        {
            return NotFound();
        }

        return poll;
    }

    // POST: api/Poll
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<CreatePollDTO>> PostPoll(CreatePollDTO poll)
    {
        var newPoll = new Poll
        {
            Question = poll.Question,
            UserId = poll.UserId,
        };

        var newOptions = poll.Options
            .Select(o => new Option { Text = o });


        newPoll.Options.AddRange(newOptions);

        _context.Polls.Add(newPoll);

        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPoll", new { id = newPoll.Id }, poll);
    }

    // DELETE: api/Poll/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePoll(int id)
    {
        var poll = await _context.Polls.FindAsync(id);
        if (poll == null)
        {
            return NotFound();
        }

        _context.Polls.Remove(poll);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

