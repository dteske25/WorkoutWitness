using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Accessors
{
    public class WorkoutAccessor : MongoAccessor<Workout>, IWorkoutAccessor
    {
        public WorkoutAccessor(MongoContext context) : base(context)
        {
        }
    }
}
