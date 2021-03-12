using Microsoft.EntityFremworkCore;
namespace WebProgramiranje.Backend.Models
{
    
    public class KlinikaContext : DbContext
    {
        public DbSet<Klinike> Klinike {get;set;}
        public DbSet<Raspored> Klinike {get;set;}
        public DbSet<Lekar> Klinike {get;set;}
        

        public KlinikaContext()
        {

        }

    }

}