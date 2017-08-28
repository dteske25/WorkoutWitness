using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Web.Params
{
    public class CreateWorkoutParams
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public string UserId { get; set; }
    }
}
