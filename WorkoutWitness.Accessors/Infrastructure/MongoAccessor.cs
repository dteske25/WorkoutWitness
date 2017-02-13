using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
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

        public IQueryable<T> AsQueryable()
        {
            return _collection.AsQueryable();
        }

        public bool Contains(Expression<Func<T, bool>> where)
        {
            return _collection.Find(where).Any();
        }

        public void Delete(Expression<Func<T, bool>> where)
        {
            _collection.DeleteOne(where);
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> where)
        {
            return _collection.Find(where).ToEnumerable();
        }

        public T First(Expression<Func<T, bool>> where)
        {
            return _collection.Find(where).First<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _collection.Find(_ => true).ToEnumerable();
        }

        public T Insert(T entity)
        {
            _collection.InsertOne(entity);
            return entity;
        }

        public void InsertMany(IEnumerable<T> entities)
        {
            _collection.InsertMany(entities);
        }

        public T Single(Expression<Func<T, bool>> where)
        {
            return _collection.Find(where).FirstOrDefault();
        }

        public void Update(Expression<Func<T, bool>> where, T entity)
        {
            _collection.FindOneAndReplace(where, entity);
        }
    }

}
