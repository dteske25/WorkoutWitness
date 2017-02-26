using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WorkoutWitness.Core.Interfaces;

namespace WorkoutWitness.Accessors.Infrastructure
{
    public abstract class MongoAccessor<T> : IMongoAccessor<T> where T : class
    {
        public readonly IMongoCollection<T> _collection;
        public MongoAccessor(MongoContext context)
        {
            _collection = context._database.GetCollection<T>(typeof(T).Name.ToString());
        }

        public async Task<IQueryable<T>> AsQueryable()
        {
            return _collection.AsQueryable();
        }

        public async Task<bool> Contains(Expression<Func<T, bool>> where)
        {
            var results = await _collection.FindAsync(where);
            return results.Any();
        }

        public async Task Delete(Expression<Func<T, bool>> where)
        {
           await _collection.DeleteOneAsync(where);
        }

        public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> where)
        {
            var results = await _collection.FindAsync(where);
            return results.ToEnumerable();
        }

        public async Task<T> First(Expression<Func<T, bool>> where)
        {
            var results = await _collection.FindAsync(where);
            return results.First();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            var results = await AsQueryable();
            return results.ToList();
        }

        public async Task Insert(T entity)
        {
            await _collection.InsertOneAsync(entity);
        }

        public async Task InsertMany(IEnumerable<T> entities)
        {
            await _collection.InsertManyAsync(entities);
        }

        public async Task<T> Single(Expression<Func<T, bool>> where)
        {
            var result = await _collection.FindAsync(where);
            return result.FirstOrDefault();
        }

        public async Task Update(Expression<Func<T, bool>> where, T entity)
        {
            await _collection.FindOneAndReplaceAsync(where, entity);
        }
        
    }

}
