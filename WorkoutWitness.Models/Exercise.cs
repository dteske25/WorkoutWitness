using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public class Exercise: BaseMongoObject
    {
        [BsonElement(Fields.Name)]
        public string Name { get; set; }

        [BsonElement(Fields.Weight)]
        public double? Weight { get; set; }

        [BsonElement(Fields.Reps)]
        public double? Reps { get; set; }

        [BsonElement(Fields.Sets)]
        public double? Sets { get; set; }

        [BsonElement(Fields.Distance)]
        public double? Distance { get; set; }

        [BsonElement(Fields.Time)]
        public TimeSpan? Time { get; set; }

        [BsonElement(Fields.WorkoutId)]
        [BsonRepresentation(BsonType.String)]
        public string WorkoutId { get; set; }

        public static class Fields
        {
            public const string Name = "n";
            public const string Weight = "w";
            public const string Reps = "r";
            public const string Sets = "s";
            public const string Distance = "d";
            public const string Time = "t";
            public const string WorkoutId = "wo_id";
        }
    }
}
