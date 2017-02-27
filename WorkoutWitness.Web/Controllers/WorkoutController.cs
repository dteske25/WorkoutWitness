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
        private readonly IExerciseAccessor _exerciseAccessor;
        public WorkoutController(IWorkoutAccessor workoutAccessor, IExerciseAccessor exerciseAccessor)
        {
            _workoutAccessor = workoutAccessor;
            _exerciseAccessor = exerciseAccessor;
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

        [HttpPost("create/exercise")]
        public async Task<JsonResult> CreateExercise([FromBody]CreateExerciseParams exerciseParams)
        {
            var result = await _exerciseAccessor.CreateExercise(new ExerciseDto()
            {
                Name = exerciseParams.Name,
                UserId = exerciseParams.UserId,
                IsTemplate = false,
                ExerciseType = (ExerciseTypes)exerciseParams.ExerciseType,
                WorkoutId = exerciseParams.WorkoutId,
                Sets = exerciseParams.Sets.Select(p => new ExerciseSetDto()
                {
                    Repetitions = p.Repetitions,
                    Weight = p.Weight,
                    Distance = p.Distance,
                    Time = new TimeSpan(p.Time)
                }).ToList()
            });
            return Json(new
            {
                result
            });
        }
    }
}
