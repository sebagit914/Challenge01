using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Alten.Data;
using Alten.DTO;
using Alten.BL;

namespace Alten.API.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        /// <summary>
        /// user login with username and password,passing UserLoginDTO object
        /// </summary>
        /// <param name="userLoginDto"></param>
        /// <returns>UserDto object</returns>
        [HttpPost]
        [Route("login")]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult Login([FromBody] UserLoginDTO userLoginDto)
        {
            UserLogic userBL = new UserLogic();
            UserDto user = userBL.Login(userLoginDto);
            if (user == null)
            {
                NotFound();
            }

            return Ok(user);
        }

        /// <summary>
        /// get users depend on user types
        /// </summary>
        /// <param name="UsertType"></param>
        /// <returns>list of userDTO objects</returns>
        [HttpGet]
        [Route("")]
        [ResponseType(typeof(IEnumerable<UserDto>))]
        public IHttpActionResult GetUsers(UserTypes UsertType)
        {
            UserLogic userlogic = new UserLogic();
            var users = userlogic.GetUsers(UsertType);
            return Ok(users);
        }

    }
}
