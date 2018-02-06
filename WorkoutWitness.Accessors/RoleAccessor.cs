using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;
using MongoDB.Driver;

namespace WorkoutWitness.Accessors
{
    public class RoleAccessor : IRoleAccessor
    {
        private readonly IMongoCollection<ApplicationRole> _collection;
        public RoleAccessor(MongoContext context)
        {
            _collection = context._database.GetCollection<ApplicationRole>(typeof(ApplicationRole).Name);
        }

        public async Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            await _collection.InsertOneAsync(role);
            return IdentityResult.Success;
        }

        public Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            _collection.DeleteOne(f => f.Id == role.Id);
            return Task.FromResult(IdentityResult.Success);
        }

        public void Dispose() { }

        public async Task<ApplicationRole> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(r => r.Id == roleId);
            return result.FirstOrDefault();
        }

        public async Task<ApplicationRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            var result = await _collection.FindAsync(r => r.NormalizedName == normalizedRoleName);
            return result.FirstOrDefault();
        }

        public Task<string> GetNormalizedRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.NormalizedName);
        }

        public Task<string> GetRoleIdAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.Id);
        }

        public Task<string> GetRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            return Task.FromResult(role.Name);
        }

        public async Task SetNormalizedRoleNameAsync(ApplicationRole role, string normalizedName, CancellationToken cancellationToken)
        {
            role.NormalizedName = normalizedName;
            await _collection.FindOneAndReplaceAsync(r => r.Id == role.Id, role);
        }

        public async Task SetRoleNameAsync(ApplicationRole role, string roleName, CancellationToken cancellationToken)
        {
            role.Name = roleName;
            await _collection.FindOneAndReplaceAsync(r => r.Id == role.Id, role);

        }

        public async Task<IdentityResult> UpdateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            await _collection.FindOneAndReplaceAsync(r => r.Id == role.Id, role);
            return IdentityResult.Success;
        }
    }
}
