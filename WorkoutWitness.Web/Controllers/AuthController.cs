using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WorkoutWitness.Models;
using WorkoutWitness.Web.Params;

namespace WorkoutWitness.Web.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
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
            if (user == null)
            {
                return Unauthorized();

            }
            await _signInManager.SignInAsync(user, false);
            return Json(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody]LoginUserParams loginUserParams)
        {

            var result = await _signInManager.PasswordSignInAsync(loginUserParams.Username, loginUserParams.Password, false, false);
            if (!result.Succeeded)
            {
                return Unauthorized();
            }
            var user = await _userManager.FindByNameAsync(loginUserParams.Username);
            return Json(user);
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> LogoutUser()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}
