using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Alten.Data;
using Alten.DTO;
using Alten.BL;

namespace Alten.API.Controllers
{
    [RoutePrefix("api/appointment")]
    public class AppointmentController : ApiController
    {
        /// <summary>
        /// get list of appointments depend on flags
        /// </summary>
        /// <param name="Canceled"/>
        /// <param name="Conflict"/>
        /// <returns>list of AppointmentDTO</returns>
        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<AppointmentDTO>))]
        public IHttpActionResult GetAppointments(bool Canceled=false,bool Conflict=false)
        {
            AppointmentLogic appointmentLogic = new AppointmentLogic();
            var appointments = appointmentLogic.GetAppointments(Canceled,Conflict);
            return Ok(appointments);
        }

        /// <summary>
        /// get list of appointments by patient id
        /// </summary>
        /// <param name="PatientID"></param>
        /// <returns>list of AppointmentDTO</returns>
        [Route("patient/{patientid}")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<AppointmentDTO>))]
        public IHttpActionResult GetAppointmentsByPatientID(int PatientID)
        {
            AppointmentLogic appointmentLogic = new AppointmentLogic();
            var appointments = appointmentLogic.GetAppointmentsByPatientID(PatientID);
            return Ok(appointments);
        }

        /// <summary>
        /// cancel specific appointment with ID, and current user id as Modified
        /// </summary>
        /// <param name="cancelAppointment">
        /// </param>
        /// <returns>number of affected rows</returns>
        [Route("cancel")]
        [HttpPut]
        [ResponseType(typeof(int))]
        public IHttpActionResult CancelAppointment([FromBody] CancelAppointmentDTO cancelAppointment)
        {
            AppointmentLogic appointmentLogic = new AppointmentLogic();
            var AffectedRow = appointmentLogic.CancelAppointment(cancelAppointment.ID, cancelAppointment.CurrentUserID);
            if (AffectedRow == 0)
            {
                NotFound();
            }
            return Ok(AffectedRow);
        }

        /// <summary>
        /// book new appointment
        /// </summary>
        /// <param name="BookAppointmentData"></param>
        /// <returns>number of affected rows</returns>
        
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(int))]
        public IHttpActionResult BookAppointment(BookAppointmentDTO BookAppointmentData)
        {
            AppointmentLogic appointmentLogic = new AppointmentLogic();
            var AffectedRow = appointmentLogic.BookAppointment(BookAppointmentData.Appointment, BookAppointmentData.CurrentUserID);
            if (AffectedRow == 0 && !ModelState.IsValid)
            {
                BadRequest();
            }
            return Ok(AffectedRow);
        }
    }
}
