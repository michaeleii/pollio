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
        // Composite key for vote
        modelBuilder.Entity<Vote>()
            .HasKey(v => new { v.UserId, v.OptionId });

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


    public static void SeedDatabase(this ModelBuilder modelBuilder)
    {
        // Seed Users
        var users = new[]
        {
            new User { Id = 1, Username = "johndoe", Password = "password123$" },
            new User { Id = 2, Username = "janedoe", Password = "password123$" },
            new User { Id = 3, Username = "scottchen", Password = "password123$" },
            new User { Id = 4, Username = "jerryfan", Password = "password123$" },
            new User { Id = 5, Username = "michaellei", Password = "password123$" },
        };

        modelBuilder.Entity<User>().HasData(users);

        // Seed Polls
        var polls = new[]
        {
            new Poll { Id = 1, Question = "Favorite Color?", UserId = users[0].Id },
            new Poll { Id = 2, Question = "Best Programming Language?", UserId = users[1].Id },
            new Poll { Id = 3, Question = "Favorite Movie?", UserId = users[2].Id },
            new Poll { Id = 4, Question = "Preferred Vacation Destination?", UserId = users[3].Id },
            new Poll { Id = 5, Question = "Favorite Food?", UserId = users[4].Id },
        };

        modelBuilder.Entity<Poll>().HasData(polls);

        // Seed Options
        var options = new[]
        {
            new Option { Id = 1, Text = "Red", PollId = polls[0].Id },
            new Option { Id = 2, Text = "Blue", PollId = polls[0].Id },
            new Option { Id = 3, Text = "C#", PollId = polls[1].Id },
            new Option { Id = 4, Text = "Python", PollId = polls[1].Id },
            new Option { Id = 5, Text = "Action", PollId = polls[2].Id },
            new Option { Id = 6, Text = "Comedy", PollId = polls[2].Id },
            new Option { Id = 7, Text = "Beach", PollId = polls[3].Id },
            new Option { Id = 8, Text = "Mountains", PollId = polls[3].Id },
            new Option { Id = 9, Text = "Pizza", PollId = polls[4].Id },
            new Option { Id = 10, Text = "Sushi", PollId = polls[4].Id },
        };

        modelBuilder.Entity<Option>().HasData(options);

        // Seed Votes
        var votes = new[]
        {
            new Vote { UserId = users[0].Id, OptionId = options[0].Id },
            new Vote { UserId = users[1].Id, OptionId = options[2].Id },
            new Vote { UserId = users[2].Id, OptionId = options[4].Id },
            new Vote { UserId = users[3].Id, OptionId = options[6].Id },
            new Vote { UserId = users[4].Id, OptionId = options[8].Id },
            new Vote { UserId = users[0].Id, OptionId = options[1].Id },
            new Vote { UserId = users[1].Id, OptionId = options[3].Id },
            new Vote { UserId = users[2].Id, OptionId = options[5].Id },
            new Vote { UserId = users[3].Id, OptionId = options[7].Id },
            new Vote { UserId = users[4].Id, OptionId = options[9].Id },
        };

        modelBuilder.Entity<Vote>().HasData(votes);
    }
}