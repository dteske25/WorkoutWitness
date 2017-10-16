using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics;

namespace WorkoutWitness.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public Process MongoDbProcess { get; set; }
        public static string MongoDbVersion = "3.4";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAccessors(Configuration["ConnectionStrings:DefaultConnection"], "WorkoutWitness");
            services.AddEngines();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                // Start a local MongoDb process, and register it to shut down if the application does
                var applicationLifetime = app.ApplicationServices.GetRequiredService<IApplicationLifetime>();
                applicationLifetime.ApplicationStopping.Register(OnShutdown);
                MongoDbProcess = Process.Start(new ProcessStartInfo
                {
                    FileName = $"C:/Program Files/MongoDB/Server/{MongoDbVersion}/bin/mongod.exe",
                    Arguments = $"--dbpath {Configuration["LocalMongoDbPath"]}",
                    CreateNoWindow = false
                });

                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        private void OnShutdown()
        {
            if (!MongoDbProcess.HasExited)
                MongoDbProcess.Kill();
        }
    }
}
