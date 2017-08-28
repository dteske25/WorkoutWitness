using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WorkoutWitness.Models;

namespace WorkoutWitness.Interfaces
{
    public interface IMongoAccessor<T> where T : IBaseMongoObject
    {
        Task<IQueryable<T>> AsQueryable();
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> Find(Expression<Func<T, bool>> where);
        Task<T> Single(Expression<Func<T, bool>> where);
        Task<T> First(Expression<Func<T, bool>> where);
        Task<bool> Contains(Expression<Func<T, bool>> where);
        Task Delete(Expression<Func<T, bool>> where);
        Task<T> Insert(T entity);
        Task InsertMany(IEnumerable<T> entities);
        Task<T> Update(T entity);
    }
}
