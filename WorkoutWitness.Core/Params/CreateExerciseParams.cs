using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Params
{
    public class CreateExerciseParams
    {
        public string Name { get; set; }
        public string UserId { get; set; }
        public int ExerciseType { get; set; }
        public List<ExerciseSetParams> Sets { get; set; }
        public string WorkoutId { get; set; }
    }

    public class ExerciseSetParams
    {
        public double Repetitions { get; set; }
        public double Weight { get; set; }
        public double Distance { get; set; }
        public long Time { get; set; }
    }
}
