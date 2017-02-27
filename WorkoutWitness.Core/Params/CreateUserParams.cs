using System;
using System.Collections.Generic;
using System.Text;

namespace WorkoutWitness.Core.Params
{
    public class CreateUserParams
    {
        public string Username { get; set; }
        public string PasswordHash { get; set; }
    }
}
