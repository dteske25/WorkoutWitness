using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Accessors
{
    public class ExerciseAccessor : MongoAccessor<Exercise>, IExerciseAccessor
    {
        public ExerciseAccessor(MongoContext context) : base(context)
        {
        }
    }
}
