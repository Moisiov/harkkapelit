namespace HarkkapelitAPI.Models
{
    public enum Role
    {
        USER,
        ADMIN
    }

    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public Role Role { get; set; }
        public virtual Profile? Profile { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}
