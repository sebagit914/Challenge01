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
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>().
                ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType.Name));

            CreateMap<UserDto, User>();

            CreateMap<Appointment, AppointmentDTO>().
                ForMember(dest => dest.PatientName, opt => opt.MapFrom(src => src.FK_Appointment_User_PatientUserID.FirstName + " " + src.FK_Appointment_User_PatientUserID.LastName)).
                ForMember(dest => dest.DoctorName, opt => opt.MapFrom(src => src.FK_Appointment_User_DoctorUserID.FirstName + " " + src.FK_Appointment_User_DoctorUserID.LastName));

            CreateMap<AppointmentDTO, Appointment>();
        }
    }
}
