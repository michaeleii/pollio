using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Pollio.Web.DTO;
using Pollio.Web.Hubs;
using Pollio.Web.Models;

namespace Pollio.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VoteController(PollContext context, IHubContext<PollHub> hub) : ControllerBase
{
    private readonly PollContext _context = context;
    private readonly IHubContext<PollHub> _hub = hub;

    // POST: api/Vote
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Vote>> PostVote(CreateVoteDTO vote)
    {


        // Check if the user already has a vote for this poll
        var existingVote = await _context.Votes
            .Include(v => v.Option)
            .Where(v => v.UserId == vote.UserId && v.Option.PollId == vote.PollId)
            .FirstOrDefaultAsync();


        // If the user already has a vote
        if (existingVote != null)
        {

            // If no new option was provided, remove previous vote
            if (vote.OptionId == null)
            {
                _context.Votes.Remove(existingVote);
                await _context.SaveChangesAsync();
                await _hub.Clients.All.SendAsync("InvalidatePolls");
                return Ok();
            }
            // Update the existing vote with the new option
            existingVote.OptionId = vote.OptionId.Value;
            await _context.SaveChangesAsync();
            await _hub.Clients.All.SendAsync("InvalidatePolls");
            return Ok();

        }

        // Check if the option belongs to the poll
        var option = await _context.Options.FindAsync(vote.OptionId);

        if (option == null || option.PollId != vote.PollId)
        {
            return BadRequest();
        }

        // Create a new vote
        var newVote = new Vote { OptionId = option.Id, UserId = vote.UserId };

        _context.Votes.Add(newVote);

        await _context.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("InvalidatePolls");

        return Ok();
    }
}

