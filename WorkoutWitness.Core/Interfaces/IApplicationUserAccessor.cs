using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IApplicationUserAccessor : IUserStore<ApplicationUser>, 
        IUserPasswordStore<ApplicationUser>, 
        IMongoAccessor<ApplicationUser>
    {
        Task<string> GetIdFromUsername(string username);
    }
}
