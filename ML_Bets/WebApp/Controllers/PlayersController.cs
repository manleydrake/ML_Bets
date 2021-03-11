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
    public class PlayersController : Controller
    {


        [HttpGet("AllPlayers")]
        public List<AllPlayers> GetAllPlayers()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/players");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllPlayers>> response = client.Execute<List<AllPlayers>>(request);
            return response.Data;
        }

        [HttpGet]
        public List<Player> GetPlayer()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/players/237");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<Player>> response = client.Execute<List<Player>>(request);
            return response.Data;
        }
    }
}

