using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Models
{
    public class Exercise : BaseMongo
    {
        [BsonElement(Fields.Name)]
        public string Name { get; set; }

        [BsonElement(Fields.UserId)]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonElement(Fields.ExerciseType)]
        public ExerciseTypes ExerciseType { get; set; }

        [BsonElement(Fields.Sets)]
        public List<ExerciseSet> Sets { get; set; }

        [BsonElement(Fields.WorkoutId)]
        [BsonRepresentation(BsonType.ObjectId)]
        public string WorkoutId { get; set; }


        public static class Fields
        {
            public const string Name = "n";
            public const string UserId = "u";
            public const string WorkoutId = "w";
            public const string ExerciseType = "et";
            public const string Sets = "s";
        }
    }
}
