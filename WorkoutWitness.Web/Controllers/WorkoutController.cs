using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Params;
using WorkoutWitness.Core.Dtos;
using WorkoutWitness.Core.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/[controller]")]
    public class WorkoutController : Controller
    {
        private readonly IWorkoutAccessor _workoutAccessor;
        public WorkoutController(IWorkoutAccessor workoutAccessor)
        {
            _workoutAccessor = workoutAccessor;
        }

        [HttpPost("create")]
        public async Task<JsonResult> CreateWorkout([FromBody]CreateWorkoutParams workoutParams)
        {
            var id = await _workoutAccessor.CreateWorkout(workoutParams.Name, workoutParams.UserId);
            return Json(new
            {
                WorkoutId = id
            });
        }


    }
}
