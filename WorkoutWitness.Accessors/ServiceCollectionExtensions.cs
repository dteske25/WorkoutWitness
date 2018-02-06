using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Accessors;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddAccessors(this IServiceCollection services, string connectionString, string databaseName)
        {
            var context = new MongoContext(connectionString, databaseName);
            services.AddScoped(p => context);

            services.AddTransient<IWorkoutAccessor, WorkoutAccessor>();
            services.AddTransient<IExerciseAccessor, ExerciseAccessor>();
            services.AddTransient<IUserAccessor, UserAccessor>();
            services.AddTransient<IRoleAccessor, RoleAccessor>();
            services.AddTransient<IUserStore<ApplicationUser>, UserAccessor>();
            services.AddTransient<IRoleStore<ApplicationRole>, RoleAccessor>();
            services.AddTransient<IUserRoleStore<ApplicationUser>, UserAccessor>();

            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddRoleStore<RoleAccessor>()
                .AddUserStore<UserAccessor>()
                .AddDefaultTokenProviders();

            return services;
        }
    }
}
