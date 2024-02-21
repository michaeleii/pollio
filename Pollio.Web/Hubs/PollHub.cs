using Microsoft.AspNetCore.SignalR;
namespace Pollio.Web.Hubs;

public class PollHub : Hub
{
    public async Task SendPoll()
    {
        await Clients.All.SendAsync("InvalidatePolls");
    }
    public async Task SendVote()
    {
        await Clients.All.SendAsync("InvalidatePolls");
    }
}
