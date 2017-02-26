using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/data")]
    public class DataController : Controller
    {
        [Route("status")]
        public JsonResult Status()
        {
            return Json("OK");
        }
    }
}