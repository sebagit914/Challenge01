using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.DTO
{
   public class BookAppointmentDTO
    {
        public AppointmentDTO Appointment { get; set;}
        public int CurrentUserID { get; set; }

    }
}
