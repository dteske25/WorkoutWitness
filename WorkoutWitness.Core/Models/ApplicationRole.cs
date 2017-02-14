using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Models
{
    public class ApplicationRole
    {
        public static class Fields
        {
            public const string RoleName = "r";
            public const string NormalizedRoleName = "nr";
        }

        [BsonId]
        public string Id { get; set; }

        [BsonElement(Fields.RoleName)]
        public string RoleName { get; set; }

        [BsonElement(Fields.NormalizedRoleName)]
        public string NormalizedRoleName { get; set; }
    }
}
