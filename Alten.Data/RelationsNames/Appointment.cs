using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.Data
{
    public partial class Appointment
    {
        public User FK_Appointment_User_CreatedBy
        {
            get { return this.User; }
            set { this.User = value; }
        }
        public User FK_Appointment_User_DoctorUserID
        {
            get { return this.User1; }
            set { this.User1 = value; }
        }

        public User FK_Appointment_User_ModifiedBy
        {
            get { return this.User2; }
            set { this.User2 = value; }
        }

        public User FK_Appointment_User_PatientUserID
        {
            get { return this.User3; }
            set { this.User3 = value; }
        }

    }
}
