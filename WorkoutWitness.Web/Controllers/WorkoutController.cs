using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;
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

        #region Get
        [HttpGet]
        public async Task<JsonResult> GetAllWorkouts()
        {
            return Json(await _workoutEngine.GetAllWorkouts());
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> GetWorkout([FromRoute]string id)
        {
            var workoutTask = _workoutEngine.GetWorkoutById(id);
            var exercisesTask = _exerciseEngine.GetAllByWorkoutId(id);

            await Task.WhenAll(workoutTask, exercisesTask);
            var workout = await workoutTask;
            var exercises = await exercisesTask;

            return Json(new { workout, exercises });
        }

        [HttpGet("user/{id}")]
        public async Task<JsonResult> GetWorkoutsByUserId([FromRoute]string id)
        {
            return Json(await _workoutEngine.GetWorkoutsByUserId(id));
        }
        #endregion
        
        #region Post
        [HttpPost("create")]
        public async Task<JsonResult> CreateWorkout([FromBody]CreateWorkoutParams param)
        {
            var workout = await _workoutEngine.Add(param.Name, DateTime.Parse(param.Date), param.UserId);
            return Json(workout);
        }

        [HttpPost("{id}/addExercise")]
        public async Task<JsonResult> CreateExercise([FromBody]CreateExerciseParams param, [FromRoute]string id)
        {
            var workoutTask = _workoutEngine.GetWorkoutById(id);
            await _exerciseEngine.Add(new Exercise
            {
                Name = param.Name,
                Distance = param.Distance,
                Reps = param.Reps,
                Sets = param.Sets,
                Weight = param.Weight,
                WorkoutId = id,
                Time = TimeSpan.Parse(param.Time)
            });
            
            var exercisesTask = _exerciseEngine.GetAllByWorkoutId(id);
            await Task.WhenAll(workoutTask, exercisesTask);
            var workout = await workoutTask;
            var exercises = await exercisesTask;
            return Json(new { workout, exercises });
        }

        #endregion
        
    }
}
