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
        // One poll has many options
        modelBuilder.Entity<Poll>()
           .HasMany(p => p.Options)
           .WithOne(o => o.Poll)
           .HasForeignKey(o => o.PollId)
           .OnDelete(DeleteBehavior.Cascade);

        // One poll has many votes
        modelBuilder.Entity<Poll>()
            .HasMany(p => p.Votes)
            .WithOne(v => v.Poll)
            .HasForeignKey(v => v.PollId)
            .OnDelete(DeleteBehavior.Cascade);


        // One user has many polls
        modelBuilder.Entity<User>()
            .HasMany(u => u.Polls)
            .WithOne(p => p.User)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);


        // One user has many votes
        modelBuilder.Entity<User>()
            .HasMany(u => u.Votes)
            .WithOne(v => v.User)
            .HasForeignKey(v => v.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // One option has many votes
        modelBuilder.Entity<Option>()
            .HasMany(o => o.Votes)
            .WithOne(v => v.Option)
            .HasForeignKey(v => v.OptionId)
            .OnDelete(DeleteBehavior.Cascade);
    }
    public static void SeedDatabase(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
                    new User { UserId = 1, Username = "john", Password = "john123$", Email = "john123@email.com" },
                    new User { UserId = 2, Username = "jane", Password = "jane123$", Email = "jane123@email.com" },
                    new User { UserId = 3, Username = "scott", Password = "scott123$", Email = "scott123@email.com" }
                );

        modelBuilder.Entity<Poll>().HasData(
            new Poll { PollId = 1, Question = "What is your favorite programming language?", UserId = 1 },
            new Poll { PollId = 2, Question = "What is your favorite food?", UserId = 2 },
            new Poll { PollId = 3, Question = "What is your favorite color?", UserId = 3 }
        );

        modelBuilder.Entity<Option>().HasData(
            new Option { OptionId = 1, Text = "C#", PollId = 1 },
            new Option { OptionId = 2, Text = "Python", PollId = 1 },
            new Option { OptionId = 3, Text = "Java", PollId = 1 },
            new Option { OptionId = 4, Text = "Pizza", PollId = 2 },
            new Option { OptionId = 5, Text = "Burger", PollId = 2 },
            new Option { OptionId = 6, Text = "Sushi", PollId = 2 },
            new Option { OptionId = 7, Text = "Blue", PollId = 3 },
            new Option { OptionId = 8, Text = "Green", PollId = 3 },
            new Option { OptionId = 9, Text = "Red", PollId = 3 }
        );

        modelBuilder.Entity<Vote>().HasData(
            new Vote { VoteId = 1, UserId = 1, PollId = 1, OptionId = 2 },
            new Vote { VoteId = 2, UserId = 2, PollId = 1, OptionId = 1 },
            new Vote { VoteId = 3, UserId = 3, PollId = 2, OptionId = 4 },
            new Vote { VoteId = 4, UserId = 1, PollId = 2, OptionId = 5 },
            new Vote { VoteId = 5, UserId = 2, PollId = 3, OptionId = 7 },
            new Vote { VoteId = 6, UserId = 3, PollId = 3, OptionId = 8 }
        );
    }
}