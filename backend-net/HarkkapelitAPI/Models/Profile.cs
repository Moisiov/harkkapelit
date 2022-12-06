namespace HarkkapelitAPI.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public string? Bio { get; set; }
        public string? Picture { get; set; }
        public string? Phone { get; set; }
    }
}
