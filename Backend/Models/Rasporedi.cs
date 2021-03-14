using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("Rasporedi")]
    public class Rasporedi
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        [Column("Ime")]
        public string Ime { get; set; }
        [Column("Prezime")]
        public string Prezime { get; set; }
        [Column("JMBG")]
        public string JMBG { get; set; }
        [Column("X")]
        public int X { get; set; }
        [Column("Y")]
        public int Y { get; set; }
        [Column("TipBoja")]
        public string TipBoja { get; set; }
        public Lekar Lekar{ get; set; }

        [JsonIgnore]
        public Klinike Klinike { get; set; }
        
        
        
        
    }
}