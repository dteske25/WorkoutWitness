using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.Security.Cryptography.X509Certificates;

namespace WorkoutWitness.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel(options =>
                {
                    //IIS < Server certificates < And select the Create Self Signed certificate
                    //var pfxFile = Path.Combine(Directory.GetCurrentDirectory(), "Sample.pfx");
                    //X509Certificate2 certificate = new X509Certificate2(pfxFile, "Password");
                    //options.UseHttps(new X509Certificate2());
                    options.UseConnectionLogging();
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
