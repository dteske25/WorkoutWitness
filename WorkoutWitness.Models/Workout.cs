using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public class Workout : BaseMongoObject
    {
        [BsonElement(Fields.Name)]
        public string Name { get; set; }

        [BsonElement(Fields.Date)]
        public DateTime Date { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement(Fields.UserId)]
        public string UserId { get; set; }


        public static class Fields
        {
            public const string Name = "name";
            public const string Date = "date";
            public const string UserId = "userId";
        }


    }
}
