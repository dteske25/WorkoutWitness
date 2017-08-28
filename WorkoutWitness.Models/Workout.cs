using System;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public class Workout : BaseMongoObject
    {
        [BsonElement(Fields.Name)]
        public string Name { get; set; }

        [BsonElement(Fields.Date)]
        public DateTime Date { get; set; }

        [BsonElement(Fields.UserId)]
        public string UserId { get; set; }


        public static class Fields
        {
            public const string Name = "n";
            public const string Date = "d";
            public const string UserId = "uid";
        }


    }
}
