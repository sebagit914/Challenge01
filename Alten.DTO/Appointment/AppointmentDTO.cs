using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.DTO
{
    public class AppointmentDTO
    {
        public int ID { get; set; }
        public int PatientUserID { get; set; }
        public string PatientName { get; set; }
        public int DoctorUserID { get; set; }
        public string DoctorName { get; set; }
        public System.DateTime Date { get; set; }
        public bool Canceled { get; set; }
        public bool Conflict { get; set; }
    }
}
