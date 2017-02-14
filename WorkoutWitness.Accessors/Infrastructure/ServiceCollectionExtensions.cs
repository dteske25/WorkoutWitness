using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Accessors;
using WorkoutWitness.Accessors.Infrastructure;
using WorkoutWitness.Core.Models;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddMongo(this IServiceCollection services, string connectionString, string databaseName)
        {
            var context = new MongoContext(connectionString, databaseName);
            services.AddScoped(p => context);

            return services;
        }

        public static IServiceCollection AddMongoIdentity(this IServiceCollection services, string connectionString, string databaseName)
        {
            var context = new MongoContext(connectionString, databaseName);
            services.AddScoped(p => context);
            services.AddTransient<IUserStore<ApplicationUser>, ApplicationUserAccessor>();
            services.AddTransient<IRoleStore<ApplicationRole>, ApplicationRoleAccessor>();
            services.AddTransient<IUserClaimsPrincipalFactory<ApplicationUser>, PrincipalFactory>();

            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddDefaultTokenProviders();

            return services;
        }
    }
}