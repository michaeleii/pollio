using Microsoft.EntityFrameworkCore;

namespace Pollio.Web.Models;

public class PollContext(DbContextOptions<PollContext> options) : DbContext(options)
{
    public DbSet<Poll> Polls => Set<Poll>();
    public DbSet<Option> Options => Set<Option>();
    public DbSet<User> Users => Set<User>();
    public DbSet<Vote> Votes => Set<Vote>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.SetDefaultDate();
        modelBuilder.ConfigureRelationships();
    }
}