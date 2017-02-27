using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Core.Interfaces;
using WorkoutWitness.Core.Params;
using WorkoutWitness.Core.Models;
using System.Threading;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IApplicationUserAccessor _userAccessor;
        public UserController(IApplicationUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
        }

        [HttpPost("create")]
        public async Task<JsonResult> CreateUser([FromBody]CreateUserParams userParams)
        {
            var tokenSource = new CancellationTokenSource();
            await _userAccessor.CreateAsync(new ApplicationUser
            {
                Username = userParams.Username,
                PasswordHash = userParams.PasswordHash,
                NormalizedUsername = userParams.Username.ToUpper()
            }, tokenSource.Token);
            var id = await _userAccessor.GetIdFromUsername(userParams.Username);
            return Json(new
            {
                userId = id
            });
        }
    }
}
