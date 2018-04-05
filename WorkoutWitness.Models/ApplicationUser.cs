using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public class ApplicationUser : IdentityUser, IBaseMongoObject
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
            public const string FirstName = "firstName";
            public const string LastName = "lastName";
            public const string Roles = "roles";
        }
    }
}
