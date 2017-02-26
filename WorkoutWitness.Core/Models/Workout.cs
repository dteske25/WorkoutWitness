using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Models
{
    public class Workout: BaseMongo
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
    }
}
