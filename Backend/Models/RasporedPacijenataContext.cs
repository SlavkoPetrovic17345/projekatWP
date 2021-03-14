using Microsoft.EntityFrameworkCore;
namespace Backend.Models
{
    public class RasporedPacijenataContext : DbContext
    {
        public DbSet<Klinike> Klinikee {get;set;}
        public DbSet<Lekar> Lekari {get;set;}
        public DbSet<Rasporedi> Raspored {get;set;}

        public RasporedPacijenataContext(DbContextOptions options):base(options)
        {
            
        }
    }
}