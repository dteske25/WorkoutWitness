using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
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
        private readonly IExerciseEngine _exerciseEngine;
        public WorkoutController(IWorkoutEngine workoutEngine, IExerciseEngine exerciseEngine)
        {
            _workoutEngine = workoutEngine;
            _exerciseEngine = exerciseEngine;
        }

        [HttpGet("")]
        public async Task<JsonResult> GetWorkouts()
        {
            var result = await _workoutEngine.GetAllWorkouts();
            return Json(result.OrderByDescending(r => r.Date).Take(25));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> GetWorkout([FromRoute]string id)
        {
            var result = await _workoutEngine.GetWorkoutById(id);
            return Json(result);
        }

        [HttpPost("")]
        public async Task<JsonResult> CreateWorkout([FromBody]string workoutName, [FromQuery]string id)
        {
            var userId = "123456789012345678901234";
            if (!string.IsNullOrWhiteSpace(id))
            {
                var renamed = await _workoutEngine.Rename(workoutName, id);
                return Json(renamed);

            }
            var result = await _workoutEngine.Add(workoutName, DateTime.UtcNow, userId);
            return Json(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteWorkout([FromRoute]string id)
        {
            await _workoutEngine.Remove(id);
            return Ok();
        }
    }
}
