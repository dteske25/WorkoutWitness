using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IExerciseEngine
    {
        Task<Exercise> Add(string name, double? weight, double? reps, double? sets, double? distance, TimeSpan? time, string workoutId);
        Task AddMany(IEnumerable<Exercise> exercises);
        Task Remove(string exerciseId);
        Task<IEnumerable<Exercise>> GetAll();
        Task<IEnumerable<Exercise>> GetAllByWorkoutId(string workoutId);
        Task RemoveAllByWorkoutId(string workoutId);
    }
}
