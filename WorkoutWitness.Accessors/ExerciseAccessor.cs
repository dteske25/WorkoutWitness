using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using WorkoutWitness.Accessors.Infrastructure;
using WorkoutWitness.Core;
using WorkoutWitness.Core.Dtos;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Models;
using MongoDB.Driver;

namespace WorkoutWitness.Accessors
{
    public class ExerciseAccessor : MongoAccessor<Exercise>, IExerciseAccessor
    {
        public ExerciseAccessor(MongoContext context) : base(context)
        {
        }

        public async Task<string> AddSet(string exerciseId, ExerciseSetDto set)
        {
            var baseSet = set.ToMongo();
            var exercise = await Single(e => e.Id == exerciseId);
            exercise.Sets.Add(baseSet);
            await Update(e => e.Id == exerciseId, exercise);
            return baseSet.Id;
        }

        public async Task<ExerciseDto> CreateExercise(ExerciseDto exercise)
        {
            var baseExercise = exercise.ToMongo();
            await Insert(baseExercise);
            return baseExercise.ToDto();
        }

        public async Task RemoveSet(string exerciseId, string setId)
        {
            var exercise = await Single(e => e.Id == exerciseId);
            exercise.Sets = exercise.Sets.Where(es => es.Id != setId).ToList();
            await Update(e => e.Id == exercise.Id, exercise);
        }
    }
}
