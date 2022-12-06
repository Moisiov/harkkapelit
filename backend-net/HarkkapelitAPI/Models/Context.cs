using Microsoft.EntityFrameworkCore;

namespace HarkkapelitAPI.Models
{
    public class Context : DbContext
    {
        public Context() : base()
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Sport> Sports { get; set; }
    }
}
