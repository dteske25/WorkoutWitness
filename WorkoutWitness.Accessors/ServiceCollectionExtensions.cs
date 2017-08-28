using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Accessors;
using WorkoutWitness.Interfaces;

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

            return services;
        }
    }
}
