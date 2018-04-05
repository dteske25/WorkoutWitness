using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Accessors
{
    public class UserAccessor : MongoAccessor<ApplicationUser>, IUserAccessor
    {
        public UserAccessor(MongoContext context) : base(context) { }

        public async Task AddToRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            if (user.Roles == null)
            {
                user.Roles = new List<string>();
            }
            user.Roles.Add(roleName);
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            await _collection.InsertOneAsync(user);
            return IdentityResult.Success;
        }

        public async Task<IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            await _collection.FindOneAndDeleteAsync(u => u.Id == user.Id);
            return IdentityResult.Success;
        }

        public void Dispose() { }

        public async Task<ApplicationUser> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(u => u.NormalizedEmail == normalizedEmail);
            return result.FirstOrDefault();
        }

        public async Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(u => u.Id == userId);
            return result.FirstOrDefault();
        }

        public async Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(u => u.NormalizedUserName == normalizedUserName);
            return result.FirstOrDefault();
        }

        public Task<string> GetEmailAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.Email);
        }

        public Task<bool> GetEmailConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.EmailConfirmed);
        }

        public Task<string> GetNormalizedEmailAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.NormalizedEmail);
        }

        public Task<string> GetNormalizedUserNameAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.NormalizedUserName);
        }

        public Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.PasswordHash);
        }

        public Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            var roles = user.Roles ?? new List<string>();
            return Task.FromResult((IList<string>)roles);
        }

        public Task<string> GetUserIdAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.Id);
        }

        public Task<string> GetUserNameAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.UserName);
        }

        public async Task<IList<ApplicationUser>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(u => u.Roles.Contains(roleName));
            return result.ToList();
        }

        public Task<bool> HasPasswordAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return Task.FromResult(string.IsNullOrWhiteSpace(user.PasswordHash));
        }

        public Task<bool> IsInRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.Roles.Contains(roleName));
        }

        public async Task RemoveFromRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            user.Roles.Remove(roleName);
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetEmailAsync(ApplicationUser user, string email, CancellationToken cancellationToken)
        {
            user.Email = email;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetEmailConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken)
        {
            user.EmailConfirmed = confirmed;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetNormalizedEmailAsync(ApplicationUser user, string normalizedEmail, CancellationToken cancellationToken)
        {
            user.NormalizedEmail = normalizedEmail;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetNormalizedUserNameAsync(ApplicationUser user, string normalizedName, CancellationToken cancellationToken)
        {
            user.NormalizedUserName = normalizedName;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken)
        {
            user.PasswordHash = passwordHash;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task SetUserNameAsync(ApplicationUser user, string userName, CancellationToken cancellationToken)
        {
            user.UserName = userName;
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
        }

        public async Task<IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            await _collection.FindOneAndReplaceAsync(u => u.Id == user.Id, user);
            return IdentityResult.Success;
        }
    }
}
