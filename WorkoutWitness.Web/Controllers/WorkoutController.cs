using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
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
        public async Task<JsonResult> CreateWorkout([FromBody]CreateWorkoutParams createWorkout)
        {
            if (string.IsNullOrWhiteSpace(createWorkout.UserId))
            {
                createWorkout.UserId = "123456789012345678901234";
            }
            if (createWorkout.Date == null)
            {
                createWorkout.Date = DateTime.Now;
            }
            var result = await _workoutEngine.Add(createWorkout.Name, createWorkout.Date, createWorkout.UserId);
            foreach (var exercise in createWorkout.Exercises)
            {
                await _exerciseEngine.Add(exercise.Name, exercise.Weight, exercise.Reps, exercise.Sets, exercise.Distance, exercise.Time, result.Id);
            }
            return Json(result);
        }

        public async Task<ActionResult> DeleteWorkout(string id)
        {
            await _workoutEngine.Remove(id);
            return Ok();
        }
    }
}
