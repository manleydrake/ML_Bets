using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RestSharp;
using System.Net.Http;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamStatsController : Controller
    {
        [HttpGet("AllTeams")]
        public List<AllTeams> GetAllTeams()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/teams");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllTeams>> response = client.Execute<List<AllTeams>>(request);
            return response.Data;
        }

        [HttpGet]
        public List<Team> GetTeam() 
        {
            var client = new RestClient("https://balldontlie.io/api/v1/teams/1");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse <List<Team>> response = client.Execute<List<Team>>(request);
            return response.Data;
        }
    }
}
