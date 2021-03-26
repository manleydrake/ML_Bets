using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class Game
    {
        public string id { get; set; }
        public DateTime date { get; set; }
        public List<Team> home_team { get; set; }
        public int home_team_score { get; set; }
        public int period { get; set; }
        public bool postseason { get; set; }
        public int season { get; set; }
        public string status { get; set; }
        public int time { get; set; }
        public List<Team> visitor_team { get; set;}
        public int visitor_team_score { get; set; }
    }
}
