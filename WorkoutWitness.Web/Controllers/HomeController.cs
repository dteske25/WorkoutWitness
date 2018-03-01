using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Hangfire;
using Microsoft.AspNetCore.Mvc;

namespace WorkoutWitness.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("queueTest")]
        public IActionResult QueueTest()
        {
            for (int i = 0; i < 10; i++)
            {
                BackgroundJob.Enqueue(() => DelayedPrint(i));
            }
            return Ok();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        public void DelayedPrint(int i)
        {
            Debug.WriteLine($"Executed {i}");
        }
    }
}
