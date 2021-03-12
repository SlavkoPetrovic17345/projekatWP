using Microsoft.EntityFremworkCore;
namespace WebProgramiranje.Backend.Models
{
    
    public class KlinikaContext : DbContext
    {
        public DbSet<klinike> Klinike {get;set;}
        public DbSet<raspored> Klinike {get;set;}
        public DbSet<lekar> Klinike {get;set;}
        

        public KlinikaContext(DbContextOptions options): base(options)
        {
            

        }

    }

}