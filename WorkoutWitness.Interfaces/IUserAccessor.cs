using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IUserAccessor: IUserStore<ApplicationUser>,
        IUserEmailStore<ApplicationUser>,
        IUserRoleStore<ApplicationUser>,
        IUserPasswordStore<ApplicationUser>
    {
    }
}
