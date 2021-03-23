using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameOddsController : Controller
    {
        [HttpGet]
        public string GetSportKey()
        {
            var client = new RestClient("https://api.the-odds-api.com/v3/odds/?apiKey=5a946dfc1e949d7aa2f87ce9a2621c94&sport=basketball_nba&region=us&mkt=h2h&oddsFormat=american");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<GameOdds>> response = client.Execute<List<GameOdds>>(request);
            Console.WriteLine(response.Content);
            return response.Content;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
