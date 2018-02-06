using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Models;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WorkoutWitness.Accessors
{
    public class ApplicationClaimsFactory : IUserClaimsPrincipalFactory<ApplicationUser>
    {
        public async Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
        {

            return new ClaimsPrincipal();
        }
    }
}
