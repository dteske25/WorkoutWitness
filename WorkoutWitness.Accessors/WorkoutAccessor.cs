using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Accessors.Infrastructure;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Accessors
{
    public class WorkoutAccessor : MongoAccessor<Workout>, IWorkoutAccessor
    {
        public WorkoutAccessor(MongoContext context) : base(context)
        {
        }

        public async Task<string> CreateWorkout(string name, string userId)
        {
            var workout = new Workout()
            {
                Name = name,
                UserId = userId,
                Date = DateTime.UtcNow,
            };
            await Insert(workout);
            return workout.Id;
        }
    }
}
