﻿using System;

namespace WorkoutWitness.Web.Params
{
    public class CreateWorkoutParams
    {
        public string Name { get; set; }
        public string UserId { get; set; }
        public DateTime Date { get; set; }
    }
}
