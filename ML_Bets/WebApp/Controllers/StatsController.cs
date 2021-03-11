using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;

namespace WebApp.Controllers
{
    public class StatsController : Controller
    {
        [HttpGet("AllStats")]
        public List<AllStats> GetAllStats()
        {
            var client = new RestClient("https://balldontlie.io/api/v1/stats");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse<List<AllStats>> response = client.Execute<List<AllStats>>(request);
            return response.Data;
        }


    }
}

