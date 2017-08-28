using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Engines
{
    public class ExerciseEngine : IExerciseEngine
    {
        private readonly IExerciseAccessor _exerciseAccessor;
        public ExerciseEngine(IExerciseAccessor exerciseAccessor)
        {
            _exerciseAccessor = exerciseAccessor;
        }

        public async Task<Exercise> Add(Exercise exercise)
        {
            return await _exerciseAccessor.Insert(exercise);
        }

        public async Task AddMany(IEnumerable<Exercise> exercises)
        {
            await _exerciseAccessor.InsertMany(exercises);
        }

        public async Task<IEnumerable<Exercise>> GetAll()
        {
            return (await _exerciseAccessor.AsQueryable()).ToList();
        }

        public async Task<IEnumerable<Exercise>> GetAllByWorkoutId(string workoutId)
        {
            return await _exerciseAccessor.Find(e => e.WorkoutId == workoutId);
        }

        public async Task Remove(string exerciseId)
        {
            await _exerciseAccessor.Delete(e => e.Id == exerciseId);
        }

        public async Task RemoveAllByWorkoutId(string workoutId)
        {
            await _exerciseAccessor.Delete(e => e.WorkoutId == workoutId);
        }
    }
}
