using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.DTO
{
    public class AppointmentSearchOptionsDTO
    {
        public bool? IsCanceled { get; set; }
        public bool? Conflict { get; set; }
    }
}
