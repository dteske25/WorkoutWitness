using Microsoft.AspNetCore.Identity;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IRoleAccessor : IRoleStore<ApplicationRole>, IMongoAccessor<ApplicationRole>
    {
    }
}
