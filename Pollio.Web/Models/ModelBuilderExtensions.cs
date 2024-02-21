using Microsoft.EntityFrameworkCore;

namespace Pollio.Web.Models;
public static class ModelBuilderExtensions
{
    public static void SetDefaultDate(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Poll>()
          .Property(e => e.CreatedAt)
          .HasDefaultValueSql("now()");

        modelBuilder.Entity<Option>()
            .Property(e => e.CreatedAt)
            .HasDefaultValueSql("now()");

        modelBuilder.Entity<User>()
            .Property(e => e.CreatedAt)
            .HasDefaultValueSql("now()");

        modelBuilder.Entity<Vote>()
            .Property(e => e.CreatedAt)
            .HasDefaultValueSql("now()");
    }
    public static void ConfigureRelationships(this ModelBuilder modelBuilder)
    {
        // A user has many polls
        modelBuilder.Entity<User>()
            .HasMany(u => u.Polls)
            .WithOne(p => p.User)
            .HasForeignKey(p => p.UserId);

        // A poll belongs to one user
        modelBuilder.Entity<Poll>()
            .HasOne(p => p.User)
            .WithMany(u => u.Polls)
            .HasForeignKey(p => p.UserId);

        // A user has many votes
        modelBuilder.Entity<User>()
            .HasMany(u => u.Votes)
            .WithOne(v => v.User)
            .HasForeignKey(v => v.UserId);

        // A vote belongs to one user
        modelBuilder.Entity<Vote>()
            .HasOne(v => v.User)
            .WithMany(u => u.Votes)
            .HasForeignKey(v => v.UserId);

        // A poll has many options
        modelBuilder.Entity<Poll>()
            .HasMany(p => p.Options)
            .WithOne(o => o.Poll)
            .HasForeignKey(o => o.PollId);

        // An option belongs to one poll
        modelBuilder.Entity<Option>()
            .HasOne(o => o.Poll)
            .WithMany(p => p.Options)
            .HasForeignKey(o => o.PollId);

        // An option has many votes
        modelBuilder.Entity<Option>()
            .HasMany(o => o.Votes)
            .WithOne(v => v.Option)
            .HasForeignKey(v => v.OptionId);

        // A vote belongs to one option
        modelBuilder.Entity<Vote>()
            .HasOne(v => v.Option)
            .WithMany(o => o.Votes)
            .HasForeignKey(v => v.OptionId);

    }
}