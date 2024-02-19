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
        SetDefaultCreateAt(modelBuilder);
        ConfigureRelationships(modelBuilder);
        SeedDatabase(modelBuilder);
    }

    protected void SetDefaultCreateAt(ModelBuilder modelBuilder)
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

    protected void ConfigureRelationships(ModelBuilder modelBuilder)
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
            .WithOne(p => p.Author)
            .HasForeignKey(p => p.AuthorId)
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

    protected void SeedDatabase(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Username = "john", Password = "john123$", Email = "john123@email.com" },
            new User { Id = 2, Username = "jane", Password = "jane123$", Email = "jane123@email.com" },
            new User { Id = 3, Username = "scott", Password = "scott123$", Email = "scott123@email.com" }
        );

        modelBuilder.Entity<Poll>().HasData(
            new Poll { Id = 1, Question = "What is your favorite programming language?", AuthorId = 1 },
            new Poll { Id = 2, Question = "What is your favorite food?", AuthorId = 2 },
            new Poll { Id = 3, Question = "What is your favorite color?", AuthorId = 3 }
        );

        modelBuilder.Entity<Option>().HasData(
            new Option { Id = 1, Text = "C#", PollId = 1 },
            new Option { Id = 2, Text = "Python", PollId = 1 },
            new Option { Id = 3, Text = "Java", PollId = 1 },
            new Option { Id = 4, Text = "Pizza", PollId = 2 },
            new Option { Id = 5, Text = "Burger", PollId = 2 },
            new Option { Id = 6, Text = "Sushi", PollId = 2 },
            new Option { Id = 7, Text = "Blue", PollId = 3 },
            new Option { Id = 8, Text = "Green", PollId = 3 },
            new Option { Id = 9, Text = "Red", PollId = 3 }
        );

        modelBuilder.Entity<Vote>().HasData(
            new Vote { Id = 1, UserId = 1, PollId = 1, OptionId = 2 },
            new Vote { Id = 2, UserId = 2, PollId = 1, OptionId = 1 },
            new Vote { Id = 3, UserId = 3, PollId = 2, OptionId = 4 },
            new Vote { Id = 4, UserId = 1, PollId = 2, OptionId = 5 },
            new Vote { Id = 5, UserId = 2, PollId = 3, OptionId = 7 },
            new Vote { Id = 6, UserId = 3, PollId = 3, OptionId = 8 }
        );
    }
}