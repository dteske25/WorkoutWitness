using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Models
{
    public class ApplicationRole : IdentityRole
    {
        public ApplicationRole()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
