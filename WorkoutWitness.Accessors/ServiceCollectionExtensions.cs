using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;
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
                .AddClaimsPrincipalFactory<ApplicationClaimsPrincipalFactory>()
                .AddDefaultTokenProviders();

            return services;
        }

        public static void CreateIndexes(MongoContext context)
        {
            // Add indexes here
            context.AddIndex(Builders<Exercise>.IndexKeys.Text(e => e.Name));
            context.AddIndex(Builders<Workout>.IndexKeys.Text(w => w.Name));
        }

        public static MongoContext AddIndex<T>(this MongoContext context, IndexKeysDefinition<T> indexDefinition, CreateIndexOptions options = null)
        {
            context._database.GetCollection<T>(nameof(T)).Indexes.CreateOne(indexDefinition, options);
            return context;
        }
    }
}
