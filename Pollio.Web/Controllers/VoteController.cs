using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Packaging;
using Pollio.Web.DTO;
using Pollio.Web.Models;

namespace Pollio.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VoteController(PollContext context) : ControllerBase
{
    private readonly PollContext _context = context;


    // POST: api/Vote
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Vote>> PostVote(CreateVoteDTO vote)
    {

        int userId = 5;

        // Check if the user already has a vote for this poll
        var existingVote = await _context.Votes
            .Where(v => v.UserId == userId && v.Option.PollId == vote.PollId)
            .FirstOrDefaultAsync();


        // If the user already has a vote
        if (existingVote != null)
        {
            // Check if the option belongs to the poll
            if (existingVote.Option.PollId != vote.PollId)
            {
                return BadRequest();
            }

            // If no new option was provided, remove previous vote
            if (vote.OptionId == null)
            {
                _context.Votes.Remove(existingVote);
                await _context.SaveChangesAsync();
                return NoContent();
            }

            // Update the existing vote with the new option
            existingVote.OptionId = vote.OptionId.Value;
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetVote", new { id = existingVote.Id }, existingVote);

        }

        if (vote.OptionId == null)
        {
            return BadRequest();
        }

        // Check if the option belongs to the poll
        var option = await _context.Options.FindAsync(vote.OptionId);

        if (option == null || option.PollId != vote.PollId)
        {
            return BadRequest();
        }

        // Create a new vote
        var newVote = new Vote { OptionId = vote.OptionId.Value, UserId = userId };

        _context.Votes.Add(newVote);

        await _context.SaveChangesAsync();

        return CreatedAtAction("GetVote", new { id = newVote.Id }, newVote);
    }

    // DELETE: api/Vote/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteVote(int id)
    {
        var vote = await _context.Votes.FindAsync(id);
        if (vote == null)
        {
            return NotFound();
        }

        _context.Votes.Remove(vote);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

