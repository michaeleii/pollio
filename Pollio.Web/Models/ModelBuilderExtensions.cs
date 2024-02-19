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
        new User { Id = 1, Username = "johndoe", Password = "password", CreatedAt = DateTime.Now },
        new User { Id = 2, Username = "janedoe", Password = "password", CreatedAt = DateTime.Now },
        new User { Id = 3, Username = "scottchen", Password = "password", CreatedAt = DateTime.Now },
        new User { Id = 4, Username = "jerryfan", Password = "password", CreatedAt = DateTime.Now },
        new User { Id = 5, Username = "mlei6", Password = "password", CreatedAt = DateTime.Now },
    };

        modelBuilder.Entity<User>().HasData(users);

        // Seed Polls
        var polls = new[]
        {
        new Poll { Id = 1, Question = "Favorite Color?", CreatedAt = DateTime.Now, UserId = users[0].Id, User = users[0] },
        new Poll { Id = 2, Question = "Best Programming Language?", CreatedAt = DateTime.Now, UserId = users[1].Id, User = users[1] },
        new Poll { Id = 3, Question = "Favorite Movie?", CreatedAt = DateTime.Now, UserId = users[2].Id, User = users[2] },
        new Poll { Id = 4, Question = "Preferred Vacation Destination?", CreatedAt = DateTime.Now, UserId = users[3].Id, User = users[3] },
        new Poll { Id = 5, Question = "Favorite Food?", CreatedAt = DateTime.Now, UserId = users[4].Id, User = users[4] },
    };

        modelBuilder.Entity<Poll>().HasData(polls);

        // Seed Options
        var options = new[]
        {
        new Option { Id = 1, Text = "Red", CreatedAt = DateTime.Now, PollId = polls[0].Id, Poll = polls[0] },
        new Option { Id = 2, Text = "Blue", CreatedAt = DateTime.Now, PollId = polls[0].Id, Poll = polls[0] },
        new Option { Id = 3, Text = "C#", CreatedAt = DateTime.Now, PollId = polls[1].Id, Poll = polls[1] },
        new Option { Id = 4, Text = "Python", CreatedAt = DateTime.Now, PollId = polls[1].Id, Poll = polls[1] },
        new Option { Id = 5, Text = "Action", CreatedAt = DateTime.Now, PollId = polls[2].Id, Poll = polls[2] },
        new Option { Id = 6, Text = "Comedy", CreatedAt = DateTime.Now, PollId = polls[2].Id, Poll = polls[2] },
        new Option { Id = 7, Text = "Beach", CreatedAt = DateTime.Now, PollId = polls[3].Id, Poll = polls[3] },
        new Option { Id = 8, Text = "Mountains", CreatedAt = DateTime.Now, PollId = polls[3].Id, Poll = polls[3] },
        new Option { Id = 9, Text = "Pizza", CreatedAt = DateTime.Now, PollId = polls[4].Id, Poll = polls[4] },
        new Option { Id = 10, Text = "Sushi", CreatedAt = DateTime.Now, PollId = polls[4].Id, Poll = polls[4] },
    };

        modelBuilder.Entity<Option>().HasData(options);

        // Seed Votes
        var votes = new[]
        {
        new Vote {  UserId = users[0].Id, OptionId = options[0].Id, CreatedAt = DateTime.Now, User = users[0], Option = options[0] },
        new Vote {  UserId = users[1].Id, OptionId = options[2].Id, CreatedAt = DateTime.Now, User = users[1], Option = options[2] },
        new Vote {  UserId = users[2].Id, OptionId = options[4].Id, CreatedAt = DateTime.Now, User = users[2], Option = options[4] },
        new Vote {  UserId = users[3].Id, OptionId = options[6].Id, CreatedAt = DateTime.Now, User = users[3], Option = options[6] },
        new Vote {  UserId = users[4].Id, OptionId = options[8].Id, CreatedAt = DateTime.Now, User = users[4], Option = options[8] },
        new Vote {  UserId = users[0].Id, OptionId = options[1].Id, CreatedAt = DateTime.Now, User = users[0], Option = options[1] },
        new Vote {  UserId = users[1].Id, OptionId = options[3].Id, CreatedAt = DateTime.Now, User = users[1], Option = options[3] },
        new Vote {  UserId = users[2].Id, OptionId = options[5].Id, CreatedAt = DateTime.Now, User = users[2], Option = options[5] },
        new Vote {  UserId = users[3].Id, OptionId = options[7].Id, CreatedAt = DateTime.Now, User = users[3], Option = options[7] },
        new Vote {  UserId = users[4].Id, OptionId = options[9].Id, CreatedAt = DateTime.Now, User = users[4], Option = options[9] },
    };

        modelBuilder.Entity<Vote>().HasData(votes);
    }
}