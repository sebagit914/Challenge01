using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Alten.Data;
using Alten.DTO;

namespace Alten.BL
{
    public class MapperHelper
    {
        public static User ToUser(UserDto userDto) {
            return Mapper.Map<UserDto, User>(userDto);
        }

        public static UserDto ToUserDto(User user)
        {
            return Mapper.Map<User, UserDto>(user);
        }

        public static Appointment ToAppointment(AppointmentDTO appointmentDTO)
        {
            return Mapper.Map<AppointmentDTO, Appointment>(appointmentDTO);
        }

        public static AppointmentDTO ToAppointmentDTO(Appointment appointment)
        {
            return Mapper.Map<Appointment, AppointmentDTO>(appointment);
        }

    }
}
