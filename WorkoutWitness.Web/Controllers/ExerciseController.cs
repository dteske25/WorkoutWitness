using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Web.Params;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkoutWitness.Web.Controllers
{
    [Authorize]
    [Route("api/exercise")]
    public class ExerciseController : Controller
    {
        private readonly IExerciseEngine _exerciseEngine;

        public ExerciseController(IExerciseEngine exerciseEngine)
        {
            _exerciseEngine = exerciseEngine;
        }

        [HttpGet("")]
        public async Task<ActionResult> GetAllExercises()
        {
            return Json(await _exerciseEngine.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetExercisesByWorkoutId(string id)
        {
            return Json(await _exerciseEngine.GetAllByWorkoutId(id));
        }

        [HttpPost("{workoutId}")]
        public async Task<ActionResult> CreateOrUpdate([FromBody]CreateExerciseParams param, string workoutId)
        {

            if (string.IsNullOrWhiteSpace(param.Id))
            {
                var result = await _exerciseEngine.Add(param.Name, param.Weight, param.Reps, param.Sets, param.Distance, param.Time, workoutId);
                return Json(result);
            }
            else
            {
                var result = await _exerciseEngine.Update(param.Id, param.Name, param.Weight, param.Reps, param.Sets, param.Distance, param.Time);
                return Json(result);
            }

        }

        [HttpDelete("{exerciseId}")]
        public async Task<ActionResult> DeleteExercise(string exerciseId)
        {
            await _exerciseEngine.Remove(exerciseId);
            return Ok();
        }
    }
}
