using Microsoft.AspNetCore.SignalR;
namespace Pollio.Web.Hubs;

public class PollHub : Hub
{
    public async Task SendPoll(int pollId)
    {
        await Clients.All.SendAsync("ReceivePoll", pollId);
    }
}
