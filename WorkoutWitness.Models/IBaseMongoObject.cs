using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutWitness.Models
{
    public interface IBaseMongoObject
    {
        string Id { get; set; }
    }
}
