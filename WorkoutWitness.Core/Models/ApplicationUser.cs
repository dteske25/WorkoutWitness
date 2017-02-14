using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace WorkoutWitness.Core.Models
{
    public class ApplicationUser : ClaimsIdentity
    {
        public static class Fields
        {
            public const string Username = "u";
            public const string NormalizedUsername = "nu";
            public const string Email = "e";
            public const string PhoneNumber = "pn";
            public const string PhoneNumberConfirmed = "pnc";
            public const string PasswordHash = "p";
            public const string TwoFactorEnabled = "tf";
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement(Fields.Username)]
        public string Username { get; set; }

        [BsonElement(Fields.NormalizedUsername)]
        public string NormalizedUsername { get; set; }

        [BsonElement(Fields.Email)]
        public string Email { get; set; }

        [BsonElement(Fields.PhoneNumber)]
        public string PhoneNumber { get; set; }

        [BsonElement(Fields.PhoneNumberConfirmed)]
        public bool PhoneNumberConfirmed { get; set; }

        [BsonElement(Fields.PasswordHash)]
        public string PasswordHash { get; set; }

        [BsonElement(Fields.TwoFactorEnabled)]
        public bool TwoFactorEnabled { get; set; }
    }
}
