using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
        [BsonElement(Fields.FirstName)]
        public string FirstName { get; set; }
        [BsonElement(Fields.LastName)]
        public string LastName { get; set; }
        [BsonIgnoreIfNull]
        [BsonElement(Fields.Roles)]
        public List<string> Roles { get; set; }

        public static class Fields
        {
            public const string FirstName = "fn";
            public const string LastName = "ln";
            public const string Roles = "r";
        }
    }
}
