using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;
using WorkoutWitness.Web.Params;
using static WorkoutWitness.Accessors.ApplicationClaimsPrincipalFactory;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkoutWitness.Web.Controllers
{
    [Authorize]
    [Route("api/workout")]
    public class WorkoutController : Controller
    {
        private readonly IWorkoutEngine _workoutEngine;
        private readonly IExerciseEngine _exerciseEngine;
        private readonly UserManager<ApplicationUser> _userManager;
        public WorkoutController(IWorkoutEngine workoutEngine, IExerciseEngine exerciseEngine, UserManager<ApplicationUser> userManager)
        {
            _workoutEngine = workoutEngine;
            _exerciseEngine = exerciseEngine;
            _userManager = userManager;
        }

        [HttpGet("")]
        public async Task<JsonResult> GetWorkouts()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == CustomClaimTypes.UserId);
            var result = await _workoutEngine.GetWorkoutsByUserId(userId.Value);
            return Json(result.OrderByDescending(r => r.Date).Take(25));
        }

        [HttpGet("{workoutId}")]
        public async Task<JsonResult> GetWorkout([FromRoute]string workoutId)
        {
            var result = await _workoutEngine.GetWorkoutById(workoutId);
            return Json(result);
        }

        [HttpPost("")]
        public async Task<JsonResult> CreateWorkout([FromBody]CreateOrUpdateWorkoutParams workoutParams)
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == CustomClaimTypes.UserId);
            if (!string.IsNullOrWhiteSpace(workoutParams.WorkoutId))
            {
                var renamed = await _workoutEngine.Update(workoutParams.WorkoutName, workoutParams.WorkoutId, workoutParams.WorkoutDate);
                return Json(renamed);

            }
            var result = await _workoutEngine.Add(workoutParams.WorkoutName, workoutParams.WorkoutDate, userId.Value);
            return Json(result);
        }

        [HttpDelete("{workoutId}")]
        public async Task<ActionResult> DeleteWorkout([FromRoute]string workoutId)
        {
            await _workoutEngine.Remove(workoutId);
            return Ok();
        }
    }
}
