using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WorkoutWitness.Core.Dtos;
using WorkoutWitness.Core.Models;

namespace WorkoutWitness.Core
{
    public static class Extensions
    {
        public static ExerciseDto ToDto(this Exercise e)
        {
            return new ExerciseDto()
            {
                Id = e.Id,
                ExerciseType = e.ExerciseType,
                IsTemplate = e.IsTemplate,
                Name = e.Name,
                Sets = e.Sets.Select(es => es.ToDto()).ToList() ?? new List<ExerciseSetDto>(),
                UserId = e.UserId,
                WorkoutId = e.WorkoutId
            };
        }

        public static Exercise ToMongo(this ExerciseDto e)
        {
            return new Exercise()
            {
                Id = e.Id ?? ObjectId.GenerateNewId().ToString(),
                ExerciseType = e.ExerciseType,
                IsTemplate = e.IsTemplate,
                Name = e.Name,
                Sets = e.Sets.Select(es => es.ToMongo()).ToList() ?? new List<ExerciseSet>(),
                UserId = e.UserId,
                WorkoutId = e.WorkoutId
            };
        }

        public static ExerciseSetDto ToDto(this ExerciseSet es)
        {
            return new ExerciseSetDto()
            {
                Id = es.Id,
                Distance = es.Distance,
                Repetitions = es.Repetitions,
                Time = es.Time,
                Weight = es.Weight
            };
        }

        public static ExerciseSet ToMongo(this ExerciseSetDto es)
        {
            return new ExerciseSet()
            {
                Id = es.Id ?? ObjectId.GenerateNewId().ToString(),
                Distance = es.Distance,
                Repetitions = es.Repetitions,
                Time = es.Time,
                Weight = es.Weight
            };
        }
    }
}
