using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using WorkoutWitness.Models;

namespace WorkoutWitness.Accessors
{
    public class ApplicationClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser>
    {
        public ApplicationClaimsPrincipalFactory(UserManager<ApplicationUser> userManager, IOptions<IdentityOptions> optionsAccessor) : base(userManager, optionsAccessor)
        {
        }

        public override Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(CustomClaimTypes.UserId, user.Id),
                new Claim(CustomClaimTypes.Username, user.UserName),
                new Claim(CustomClaimTypes.Email, user.Email),
                new Claim(CustomClaimTypes.FirstName, user.FirstName),
                new Claim(CustomClaimTypes.LastName, user.LastName),
            };

            var principal = new ClaimsPrincipal(new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme));

            return Task.FromResult(principal);
        }

        public static class CustomClaimTypes
        {
            public const string UserId = "userId";
            public const string Username = "username";
            public const string Email = "email";
            public const string FirstName = "firstName";
            public const string LastName = "lastName";
        }
    }
}
