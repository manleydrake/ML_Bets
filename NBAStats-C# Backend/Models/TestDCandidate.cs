using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;

namespace NBAStats.Models
{
    public class TestDCandidate
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string fullname { get; set; }
        
        public int mobile { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

    }
}
