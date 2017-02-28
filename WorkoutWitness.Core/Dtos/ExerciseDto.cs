using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core.Dtos
{
    public class ExerciseDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public ExerciseTypes ExerciseType { get; set; }
        public List<ExerciseSetDto> Sets { get; set; }
        public string WorkoutId { get; set; }
    }

    public class ExerciseSetDto
    {
        public string Id { get; set; }
        public double Repetitions { get; set; }
        public double Weight { get; set; }
        public double Distance { get; set; }
        public TimeSpan Time { get; set; }
    }
}
