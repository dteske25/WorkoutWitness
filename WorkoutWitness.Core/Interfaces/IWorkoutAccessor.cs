using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IWorkoutAccessor: IMongoAccessor<Workout>
    {
        // Returns the objectId of the workout
        Task<string> CreateWorkout(string name, string userId);
    }
}
