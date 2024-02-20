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
    public async Task<ActionResult<IEnumerable<PollDTO>>> GetPolls()
    {
        return await _context.Polls
            .Include(p => p.User)
            .Select(p => new PollDTO
            {
                Id = p.Id,
                Question = p.Question,
                CreatedAt = p.CreatedAt,
                User = new PollDTO.UserDTO
                {
                    Id = p.User.Id,
                    Username = p.User.Username,
                },
                Options = p.Options.Select(o => new PollDTO.OptionDTO
                {
                    Id = o.Id,
                    Text = o.Text,
                    CreatedAt = o.CreatedAt,
                }).ToList(),
            })
            .ToListAsync();
    }

    // GET: api/Poll/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Poll>> GetPoll(int id)
    {
        var poll = await _context.Polls.FindAsync(id);

        if (poll == null)
        {
            return NotFound();
        }

        return poll;
    }

    // PUT: api/Poll/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPoll(int id, Poll poll)
    {
        if (id != poll.Id)
        {
            return BadRequest();
        }

        _context.Entry(poll).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PollExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Poll
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<CreatePollDTO>> PostPoll(CreatePollDTO poll)
    {
        var newPoll = new Poll
        {
            Question = poll.Question,
            UserId = 5,
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

    private bool PollExists(int id)
    {
        return _context.Polls.Any(e => e.Id == id);
    }
}

