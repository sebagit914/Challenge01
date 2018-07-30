using System;
using System.Collections;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Alten.API.Controllers;
using Alten.DTO;
using System.Collections.Generic;

namespace Alten.API.Tests
{
    [TestClass]
    public class UsersTests:BaseTests
    {
        [TestMethod]
        public void LoginAdminUser()
        {
            UserLoginDTO data = new UserLoginDTO { UserName = "admin", Password = "admin" };
            var userController = new UserController();
            var client = new HttpClient();
            var response = client.PostAsJsonAsync(LOGIN_URL, data).Result;
            var result = response.Content.ReadAsAsync<UserDto>();
            Assert.IsNotNull(result.Result);
        }
    }
}
