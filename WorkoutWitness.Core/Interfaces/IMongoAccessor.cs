using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WorkoutWitness.Core.Interfaces
{
    public interface IMongoAccessor<T> where T : class
    {
        Task<IQueryable<T>> AsQueryable();
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> Find(Expression<Func<T, bool>> where);
        Task<T> Single(Expression<Func<T, bool>> where);
        Task<T> First(Expression<Func<T, bool>> where);
        Task<bool> Contains(Expression<Func<T, bool>> where);
        Task Delete(Expression<Func<T, bool>> where);
        Task Insert(T entity);
        Task InsertMany(IEnumerable<T> entities);
        Task Update(Expression<Func<T, bool>> where, T entity);
    }
}
