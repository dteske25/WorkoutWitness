using MongoDB.Driver;

namespace WorkoutWitness.Accessors
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
