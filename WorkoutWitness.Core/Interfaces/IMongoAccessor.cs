using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IMongoAccessor<T> where T : class
    {
        IQueryable<T> AsQueryable();
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Expression<Func<T, bool>> where);
        T Single(Expression<Func<T, bool>> where);
        T First(Expression<Func<T, bool>> where);
        bool Contains(Expression<Func<T, bool>> where);
        void Delete(Expression<Func<T, bool>> where);
        T Insert(T entity);
        void InsertMany(IEnumerable<T> entities);
        void Update(Expression<Func<T, bool>> where, T entity);
    }
}
