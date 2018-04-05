using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MongoDB.Driver;
using WorkoutWitness.Interfaces;
using WorkoutWitness.Models;

namespace WorkoutWitness.Accessors
{
    public abstract class MongoAccessor<T> : IMongoAccessor<T> where T : IBaseMongoObject
    {
        public readonly IMongoCollection<T> _collection;
        public MongoAccessor(MongoContext context)
        {
            _collection = context._database.GetCollection<T>(typeof(T).Name);
        }

        public Task<IQueryable<T>> AsQueryable()
        {
            IQueryable<T> queryable = _collection.AsQueryable();
            return Task.FromResult(queryable);
        }

        public async Task<bool> Contains(Expression<Func<T, bool>> where)
        {
            return (await _collection.FindAsync(where)).Any();
        }

        public async Task Delete(Expression<Func<T, bool>> where)
        {
            await _collection.DeleteManyAsync(where);
        }

        public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> where)
        {
            return (await _collection.FindAsync(where)).ToEnumerable();
        }

        public async Task<T> First(Expression<Func<T, bool>> where)
        {
            return (await _collection.FindAsync(where)).FirstOrDefault();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return (await AsQueryable()).ToList();
        }

        public async Task<T> Insert(T entity)
        {
            await _collection.InsertOneAsync(entity);
            return entity;
        }

        public async Task InsertMany(IEnumerable<T> entities)
        {
            await _collection.InsertManyAsync(entities);
        }

        public async Task<T> Single(Expression<Func<T, bool>> where)
        {
            return (await _collection.FindAsync(where)).Single();
        }

        public async Task<T> Update(T entity)
        {
            await _collection.ReplaceOneAsync(e => e.Id == entity.Id, entity);
            return entity;
        }
    }
}
