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
        [HttpGet("SearchPlayer/{FirstName}")]
        public List<PlayerSearch> SearchPlayer(string FirstName)
        {
            var clientString = "https://balldontlie.io/api/v1/players?search=" + FirstName;
            var client = new RestClient(clientString);
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<PlayerSearch>> response = client.Execute<List<PlayerSearch>>(request);
            return response.Data;
        }
        [HttpGet("GetPlayerStats/{id}/{year}")]
        public List<AllStats> GetPlayerStats(int id, int year)
        {
            var clientString = "https://www.balldontlie.io/api/v1/season_averages?season=" + year + "&player_ids[]=" + id;
            //"https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + id;
            var client = new RestClient(clientString);
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllStats>> response = client.Execute<List<AllStats>>(request);
            return response.Data;
        }
        [HttpGet("GetNextPage/{pg}")]
        public List<AllPlayers> GetNextPage(int pg)
        {
            var clientString = "https://balldontlie.io/api/v1/players/?page=" + pg;
            var client = new RestClient(clientString);
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllPlayers>> response = client.Execute<List<AllPlayers>>(request);
            return response.Data;
        }
    }
}


