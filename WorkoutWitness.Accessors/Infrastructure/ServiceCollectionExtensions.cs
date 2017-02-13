using System;
using System.Collections.Generic;
using System.Text;
using WorkoutWitness.Accessors.Infrastructure;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddMongo(this IServiceCollection services, string connectionString, string databaseName)
        {
            services.AddScoped(p => new MongoContext(connectionString, databaseName));
            return services;
        }
    }
}