using System;

namespace WorkoutWitness.Web.Params
{
    public class CreateOrUpdateWorkoutParams
    {
        public string WorkoutId { get; set; }
        public string WorkoutName { get; set; }
        public DateTime WorkoutDate { get; set; }
    }
}
