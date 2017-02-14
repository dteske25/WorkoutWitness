using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IPrincipalFactory : IUserClaimsPrincipalFactory<ApplicationUser>
    {
    }
}
