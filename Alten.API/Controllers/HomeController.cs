using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Alten.API.Controllers
{
    public class HomeController : ApiController
    {
        /// <summary>
        /// Initila Home API 
        /// </summary>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok("Initila Home API ...");
        }
    }
}
