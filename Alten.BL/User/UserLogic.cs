using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Alten.Data;
using Alten.DTO;

namespace Alten.BL
{
    public class UserLogic : BaseLogic
    {
        public UserLogic()
        {

        }


        #region Functions

        public UserDto Login(UserLoginDTO userLogin)
        {
            User user = context.Users.SingleOrDefault(u => u.UserName.ToLower() == userLogin.UserName.ToLower() &&
                                                        u.Password == userLogin.Password);
            if (user != null) {
                return MapperHelper.ToUserDto(user);
            }
            return null;
        }
        public IEnumerable<UserDto> GetUsers(UserTypes userType)
        {
            return context.Users
                          .Where(u => u.UserTypeID == (int)userType)
                          .Select(MapperHelper.ToUserDto);
        }
        #endregion

    }
}
