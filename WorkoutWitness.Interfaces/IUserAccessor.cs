using Microsoft.AspNetCore.Identity;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IUserAccessor : IUserStore<ApplicationUser>,
        IUserEmailStore<ApplicationUser>,
        IUserRoleStore<ApplicationUser>,
        IUserPasswordStore<ApplicationUser>,
        IMongoAccessor<ApplicationUser>
    {
    }
}
