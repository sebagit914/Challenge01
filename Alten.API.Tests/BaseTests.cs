using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.API.Tests
{
    public class BaseTests
    {
        #region Private Variables
        public const string ROOT_URL = "http://localhost:1629/api/";
        public const string LOGIN_URL = ROOT_URL + "user/login";
        public const string BOOK_APPOINTMENT_URL = ROOT_URL + "appointment";
        public const string CANCEL_APPOINTMENT_URL = ROOT_URL + "appointment/cancel";
        #endregion
    }
}
