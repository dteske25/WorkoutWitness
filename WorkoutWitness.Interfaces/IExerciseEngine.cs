using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IExerciseEngine
    {
        Task<Exercise> Add(Exercise exercise);
        Task AddMany(IEnumerable<Exercise> exercises);
        Task Remove(string exerciseId);
        Task<IEnumerable<Exercise>> GetAll();
        Task<IEnumerable<Exercise>> GetAllByWorkoutId(string workoutId);
        Task RemoveAllByWorkoutId(string workoutId);
    }
}
