using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("Lekar")]
    public class Lekar
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        [Column("Ime")]

        public string Ime { get; set; }
        [Column("Prezime")]

        public string Prezime { get; set; }
        [Column("Specijalizacija")]
        public string Specijalizacija { get; set; }
        
        [JsonIgnore]
        public Klinike Klinike { get; set; }
        
    }
}