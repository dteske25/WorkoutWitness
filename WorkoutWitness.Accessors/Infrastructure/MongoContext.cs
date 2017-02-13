using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Accessors.Infrastructure
{
    public class MongoContext
    {
        public readonly MongoClient _client;
        public readonly IMongoDatabase _database;

        public MongoContext(string connectionString, string databaseName = "test")
        {
            _client = new MongoClient(connectionString);
            _database = _client.GetDatabase(databaseName);
        }
    }
}
