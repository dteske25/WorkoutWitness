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
    public class ExerciseController : Controller
    {
        private readonly IExerciseAccessor _exerciseAccessor;

        public ExerciseController(IExerciseAccessor exerciseAccessor)
        {
            _exerciseAccessor = exerciseAccessor;
        }
        // GET: api/values
        [HttpGet("types")]
        public async Task<JsonResult> GetExerciseTypes()
        {
            var names = Enum.GetNames(typeof(ExerciseTypes)).ToList(); ;
            return Json(names.Select(n =>
                new
                {
                    value = (int)Enum.Parse(typeof(ExerciseTypes), n),
                    label = n
                })
            );
        }

        [HttpPost("create")]
        public async Task<JsonResult> CreateExercise([FromBody]CreateExerciseParams exerciseParams)
        {
            var result = await _exerciseAccessor.CreateExercise(new ExerciseDto()
            {
                Name = exerciseParams.Name,
                UserId = exerciseParams.UserId,
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
