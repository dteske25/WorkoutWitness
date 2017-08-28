using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Engines;
using WorkoutWitness.Interfaces;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddEngines(this IServiceCollection services)
        {
            services.AddTransient<IExerciseEngine, ExerciseEngine>();
            services.AddTransient<IWorkoutEngine, WorkoutEngine>();

            return services;
        }
    }
}