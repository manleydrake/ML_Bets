using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class Player
    {
        public string id { get; set; }
        public string first_name { get; set; }
        public int height_feet { get; set; }
        public int height_inches { get; set; }
        public string last_name { get; set; }
        public string position { get; set; }
        public List<Team> team { get; set; }
        public int weight_pounds { get; set; }
    }
}
