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
    public class GamesController : Controller
    {
        [HttpGet("AllGames")]
        public List<AllGames> GetAllGames()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/games");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllGames>> response = client.Execute<List<AllGames>>(request);
            return response.Data;
        }

        [HttpGet("Games")]
        public List<Game> GetGame()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/games/32881");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<Game>> response = client.Execute<List<Game>>(request);
            return response.Data;
        }
    }
}
