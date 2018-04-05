using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public class Exercise : BaseMongoObject
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
        [BsonRepresentation(BsonType.ObjectId)]
        public string WorkoutId { get; set; }

        public static class Fields
        {
            public const string Name = "name";
            public const string Weight = "weight";
            public const string Reps = "reps";
            public const string Sets = "sets";
            public const string Distance = "distance";
            public const string Time = "time";
            public const string WorkoutId = "workoutId";
        }
    }
}
