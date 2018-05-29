using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IWorkoutEngine
    {
        Task<Workout> Add(string name, DateTime date, string userId);
        Task Remove(string workoutId);
        Task<Workout> Update(string workoutName, string workoutId, DateTime date);
        Task<IEnumerable<Workout>> GetAllWorkouts();
        Task<Workout> GetWorkoutById(string workoutId);
        Task<IEnumerable<Workout>> GetWorkoutsByUserId(string userId);
    }
}
