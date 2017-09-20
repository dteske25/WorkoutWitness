using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Web.Params;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/[controller]")]
    public class WorkoutController : Controller
    {
        private readonly IWorkoutEngine _workoutEngine;
        public WorkoutController(IWorkoutEngine workoutEngine)
        {
            _workoutEngine = workoutEngine;
        }

        [HttpGet("")]
        public async Task<JsonResult> GetWorkouts()
        {
            var result = await _workoutEngine.GetAllWorkouts();
            return Json(result);
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> GetWorkout([FromRoute]string id)
        {
            var result = await _workoutEngine.GetWorkoutById(id);
            return Json(result);
        }

        [HttpPost("")]
        public async Task<JsonResult> CreateWorkout([FromBody]CreateWorkoutParams createWorkout)
        {
            var result = await _workoutEngine.Add(createWorkout.Name, DateTime.Now, createWorkout.UserId);
            return Json(result);
        }

        public async Task<ActionResult> DeleteWorkout(string id)
        {
            await _workoutEngine.Remove(id);
            return Ok();
        }
    }
}
