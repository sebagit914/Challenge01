using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Alten.Data;
using Alten.DTO;
namespace Alten.BL
{
    public class AppointmentLogic : BaseLogic
    {
        public AppointmentLogic() { }

        #region Functions Helper
        private bool IsConflictAppointment(int PatientID, int DoctorID, DateTime Date) {
          var result =   context.Appointments.Where(appointment => appointment.PatientUserID != PatientID
            && appointment.DoctorUserID == DoctorID
            && appointment.Date.Year == Date.Year
            && appointment.Date.Month == Date.Month
            && appointment.Date.Day == Date.Day
            && appointment.Date.Hour == Date.Hour).ToList();
            if (result.Count() > 0) {
                return true;
            }
            return false;
        }
        #endregion

        #region Functions
        public IEnumerable<AppointmentDTO> GetAppointments(Boolean isCanceled = false, Boolean IsConflict = false)
        {
            return context.Appointments.
                 Where(a => a.Canceled == isCanceled && a.Conflict == IsConflict).
                 Select(MapperHelper.ToAppointmentDTO);
        }
        public IEnumerable<AppointmentDTO> GetAppointmentsByPatientID(int PatientID)
        {
            return context.Appointments.
                 Where(a => a.PatientUserID == PatientID && a.Canceled == false).
                 Select(MapperHelper.ToAppointmentDTO);
        }

        public int CancelAppointment(int ID,int CurrentUserID)
        {
            Appointment appointment = context.Appointments.SingleOrDefault(a => a.ID == ID);
            User user = context.Users.SingleOrDefault(u => u.ID == CurrentUserID);
            if (appointment == null && user == null)
            {
                return 0;
            }

            appointment.Canceled = true;
            appointment.ModifiedBy = CurrentUserID;
            appointment.ModifiedDate = DateTime.Now;
           return context.SaveChanges();
        }

        public int BookAppointment(AppointmentDTO appointmentDTO,int CurrentUserID) {
            Appointment appointment = MapperHelper.ToAppointment(appointmentDTO);
            appointment.CreatedBy = CurrentUserID;
            appointment.CreatedDate = DateTime.Now;
            appointment.ModifiedDate = appointment.CreatedDate;
            appointment.ModifiedBy = CurrentUserID;
            appointment.Canceled = false;
            appointment.Conflict = IsConflictAppointment(appointment.PatientUserID, appointment.DoctorUserID, appointment.Date);
            context.Appointments.Add(appointment);
           return context.SaveChanges();
        }
        #endregion
    }
}
