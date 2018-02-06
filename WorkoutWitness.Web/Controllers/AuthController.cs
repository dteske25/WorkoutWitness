using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkoutWitness.Models;
using WorkoutWitness.Web.Params;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Threading;
using System.Diagnostics;

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/auth")]
    public class AuthController: Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IHostedService _hostedService;

        public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IHostedService hostedService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _hostedService = hostedService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody]CreateUserParams createUserParams)
        {
            var result = await _userManager.CreateAsync(new ApplicationUser
            {
                Email = createUserParams.EmailAddress,
                UserName = createUserParams.Username,
                FirstName = createUserParams.FirstName,
                LastName = createUserParams.LastName,
            }, createUserParams.Password);
            var user = await _userManager.FindByNameAsync(createUserParams.Username);
            if (user != null)
            {
                await _signInManager.SignInAsync(user, false);
                return Json(user);
            }
            return Unauthorized();
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody]LoginUserParams loginUserParams)
        {
            var user = await _userManager.FindByNameAsync(loginUserParams.Username);
            var result = await _signInManager.PasswordSignInAsync(user, loginUserParams.Password, false, false);
            if (result == Microsoft.AspNetCore.Identity.SignInResult.Success)
            {
                return Json(user);
            }
            return Unauthorized();
        }

        [HttpPost("logout")]
        public async Task<IActionResult> LogoutUser()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost("lock")]
        public async Task<IActionResult> LockUser()
        {
            return Ok();
        }


        //Login
        //Logout
        //AccessDenied
    }
}
