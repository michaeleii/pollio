using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pollio.Web.Models;

namespace Pollio.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController(PollContext context) : ControllerBase
{
    private readonly PollContext _context = context;
    public class RegisterUserDTO
    {
        public string Id { get; set; } = null!;
        public string Avatar { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string LastName { get; set; } = null!;
    }

    // POST: api/Auth
    [HttpPost]
    public async Task<ActionResult> Register(RegisterUserDTO registerUser)
    {
        // Check if user exists
        var existingUser = await _context.Users.Where(u => registerUser.Id == u.Id).FirstOrDefaultAsync();

        // If user exists, return
        if (existingUser is not null)
        {
            return NoContent();
        }

        // If user does not exist, create user
        var user = new User
        {
            Id = registerUser.Id,
            Avatar = registerUser.Avatar,
            Email = registerUser.Email,
            Name = registerUser.Name,
            LastName = registerUser.LastName
        };
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return Ok();
    }


}

