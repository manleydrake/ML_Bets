using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class Stats
    {

        public int id { get; set; }
        public int ast { get; set; }
        public int blk { get; set; }
        public int dreb { get; set; }
        public int fg3_pct { get; set; }
        public int fg3a { get; set; }
        public int fg3m { get; set; }
        public int fg_pct { get; set; }
        public int fga { get; set; }
        public int fgm { get; set; }
        public int ft_pct { get; set; }
        public int fta { get; set; }
        public int ftm { get; set; }
        public List<Game> game { get; set; }
        public string min { get; set; }
        public int oreb { get; set; }
        public int pf { get; set; }
        public List<Player> player { get; set; }
        public int pts { get; set; }
        public int reb { get; set; }
        public int stl { get; set; }
        public List<Team> team {get; set;}
        public int turnover { get; set; }
    }
    public class PlayerStats
    {
        public List<Stats> data { get; set; }
        public List<Meta> meta { get; set; }
    }
}
