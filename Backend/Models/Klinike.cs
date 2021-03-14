using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("PrivatneKlinike")]
    public class Klinike
    {
        [Key]
        [Column("ID")]
        public int ID {get;set;}
        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv  {get;set;}
        [Column("BrojLekara")]
        public int BrojLekara  {get;set;}
        [Column("Termina")]
        public int BrojTermina  {get;set;}
        
        public virtual List<Rasporedi> Rasporedii { get; set; }
        
        public virtual List<Lekar> Lekari { get; set; }

    }
}