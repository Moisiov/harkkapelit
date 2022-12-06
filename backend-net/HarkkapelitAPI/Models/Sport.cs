namespace HarkkapelitAPI.Models
{
    public class Sport
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}
