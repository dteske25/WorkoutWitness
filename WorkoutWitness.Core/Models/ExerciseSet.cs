using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Models
{
    public class ExerciseSet : BaseMongo
    {
        [BsonElement(Fields.Repetitions)]
        public double Repetitions { get; set; }

        [BsonElement(Fields.Weight)]
        public double Weight { get; set; }

        [BsonElement(Fields.Distance)]
        public double Distance { get; set; }

        [BsonElement(Fields.Time)]
        public TimeSpan Time { get; set; }


        public static class Fields
        {
            public const string Repetitions = "r";
            public const string Weight = "w";
            public const string Distance = "d";
            public const string Time = "t";
        }
    }
}
