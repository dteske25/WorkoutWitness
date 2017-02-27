using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Core.Dtos;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IExerciseAccessor: IMongoAccessor<Exercise>
    {
        // Adds a set to the exercise
        Task<string> AddSet(string exerciseId, ExerciseSetDto set);

        // Creates the exercise
        Task<ExerciseDto> CreateExercise(ExerciseDto exercise);

        // Removes a set from the exercise
        Task RemoveSet(string exerciseId, string setId);
    }
}
