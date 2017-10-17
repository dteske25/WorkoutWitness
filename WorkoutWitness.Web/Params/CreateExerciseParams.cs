using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkoutWitness.Web.Params
{
    public class CreateExerciseParams
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double? Weight { get; set; }
        public double? Reps { get; set; }
        public double? Sets { get; set; }
        public double? Distance { get; set; }
        public TimeSpan? Time { get; set; }
    }
}
