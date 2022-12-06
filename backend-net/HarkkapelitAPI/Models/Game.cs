namespace HarkkapelitAPI.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool Active { get; set; }
        public int SportId { get; set; }
        public Sport Sport { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public int Generation { get; set; }
        public int SkillLevel { get; set; }
        public DateTime GameDate { get; set; }
    }
}
