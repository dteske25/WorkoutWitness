using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IWorkoutEngine
    {
        Task<Workout> Add(string name, DateTime date, string userId);
        Task Remove(string workoutId);
        Task<Workout> Rename(string workoutName, string workoutId);
        Task<IEnumerable<Workout>> GetAllWorkouts();
        Task<Workout> GetWorkoutById(string workoutId);
        Task<IEnumerable<Workout>> GetWorkoutsByUserId(string userId);
    }
}
