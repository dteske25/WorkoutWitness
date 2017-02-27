using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Accessors
{
    public class PrincipalFactory : IPrincipalFactory
    {
        public async Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
        {
            ClaimsIdentity identity = new ClaimsIdentity("Microsoft.AspNet.Identity.Application");
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.NormalizedUsername));
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Username));

            ClaimsPrincipal principal = new ClaimsPrincipal(identity);
            return principal;
        }
    }
}
