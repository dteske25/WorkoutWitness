using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IWorkoutAccessor : IMongoAccessor<Workout>
    {
    }
}
