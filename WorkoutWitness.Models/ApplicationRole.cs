using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;

namespace WorkoutWitness.Models
{
    public class ApplicationRole : IdentityRole, IBaseMongoObject
    {
        public ApplicationRole()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
