using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Accessors.Infrastructure
{
    public class ApplicationRoleAccessor : MongoAccessor<ApplicationRole>, IApplicationRoleAccessor
    {
        public ApplicationRoleAccessor(MongoContext context) : base(context)
        {
        }

        public async Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            try
            {
                await Insert(role);
                return IdentityResult.Success;
            }
            catch (Exception)
            {
                return IdentityResult.Failed();
            }
        }

        public async Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            try
            {
                await Delete(r => r.Id == role.Id);
                return IdentityResult.Success;
            }
            catch (Exception)
            {
                return IdentityResult.Failed();
            }
        }

        public void Dispose() { }

        public async Task<ApplicationRole> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            return await Single(r => r.Id == roleId);
        }

        public async Task<ApplicationRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            return await Single(r => r.NormalizedRoleName == normalizedRoleName);
        }

        public async Task<string> GetNormalizedRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return role.NormalizedRoleName;
        }

        public async Task<string> GetRoleIdAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return role.Id;
        }

        public async Task<string> GetRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return role.RoleName;
        }

        public async Task SetNormalizedRoleNameAsync(ApplicationRole role, string normalizedName, CancellationToken cancellationToken)
        {
            role.NormalizedRoleName = normalizedName;
            await Update(r => r.Id == role.Id, role);
        }

        public async Task SetRoleNameAsync(ApplicationRole role, string roleName, CancellationToken cancellationToken)
        {
            role.RoleName = roleName;
            await Update(r => r.Id == role.Id, role);
        }

        public async Task<IdentityResult> UpdateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            try
            {
                await Update(r => r.Id == role.Id, role);
                return IdentityResult.Success;
            }
            catch (Exception)
            {
                return IdentityResult.Failed();
            }
        }
    }
}
