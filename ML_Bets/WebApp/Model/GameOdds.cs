using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class GameOdds
    {
        public Boolean success { get; set; }
        public List<dataOdds> data { get; set; }

    }
    public class dataOdds
    {
        public string id { get; set; }
        public string sport_key { get; set; }
        public string sport_nice { get; set; }
        public string teams { get; set; }
        public string commence_time { get; set; }
        public string home_team { get; set; }
        public List<sites> sites { get; set; }

    }
    public class sites
    {
        public string site_key { get; set; }
        public string site_nice { get; set; }
        public string last_update { get; set; }
        public string odds { get; set; }

    }
}
