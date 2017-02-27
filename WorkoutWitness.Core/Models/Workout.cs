using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Models
{
    public class Workout : BaseMongo
    {
        [BsonElement(Fields.Name)]
        public string Name { get; set; }

        [BsonElement(Fields.Date)]
        public DateTime Date { get; set; }

        [BsonElement(Fields.IsTemplate)]
        public bool IsTemplate { get; set; }

        [BsonElement(Fields.UserId)]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }


        public static class Fields
        {
            public const string Name = "n";
            public const string Date = "d";
            public const string IsTemplate = "it";
            public const string UserId = "u";
        }
    }
}
