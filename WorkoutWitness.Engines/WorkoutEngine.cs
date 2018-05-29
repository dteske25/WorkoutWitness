using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Engines
{
    public class WorkoutEngine : IWorkoutEngine
    {
        private readonly IWorkoutAccessor _workoutAccessor;
        private readonly IExerciseAccessor _exerciseAccessor;
        public WorkoutEngine(IWorkoutAccessor workoutAccessor, IExerciseAccessor exerciseAccessor)
        {
            _workoutAccessor = workoutAccessor;
            _exerciseAccessor = exerciseAccessor;
        }

        public async Task<Workout> Add(string name, DateTime date, string userId)
        {
            return await _workoutAccessor.Insert(new Workout
            {
                Name = name,
                Date = date,
                UserId = userId,
            });
        }

        public async Task<IEnumerable<Workout>> GetAllWorkouts()
        {
            return (await _workoutAccessor.AsQueryable()).ToList();
        }

        public async Task<Workout> GetWorkoutById(string workoutId)
        {
            return await _workoutAccessor.Single(w => w.Id == workoutId);
        }

        public async Task<IEnumerable<Workout>> GetWorkoutsByUserId(string userId)
        {
            return await _workoutAccessor.Find(w => w.UserId == userId);
        }

        public async Task Remove(string workoutId)
        {
            await _exerciseAccessor.Delete(e => e.WorkoutId == workoutId);
            await _workoutAccessor.Delete(w => w.Id == workoutId);
        }

        public async Task<Workout> Update(string workoutName, string workoutId, DateTime date)
        {
            var workout = await _workoutAccessor.Single(w => w.Id == workoutId);
            workout.Name = workoutName;
            workout.Date = date;
            await _workoutAccessor.Update(workout);
            return workout;
        }
    }
}
