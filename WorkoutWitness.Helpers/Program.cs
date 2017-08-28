using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Threading;

namespace WorkoutWitness.Helpers
{
    class Program
    {
        const string version = "3.4";
        const string dbPath = "C:/MongoData";
        const string npmRelativePath = "WorkoutWitness.Web";

        const string helpCommand = "help";
        const string startCommand = "start";
        const string killCommand = "stop";
        const string restartCommand = "restart";
        const string exitKey = "q";

        static void Main(string[] args)
        {
            Console.Title = "WorkoutWitness Helper App";

            var manager = new TaskManager();
            manager.AddProcess("mongo", CreateMongoProcess());
            manager.AddProcess("npm", CreateNPMProcess());

            bool shouldRun = true;
            while (shouldRun)
            {
                Console.WriteLine("WorkoutWitness Helpers");
                Console.WriteLine($"Enter '{helpCommand}' to see full list of commands");
                Console.WriteLine($"Enter '{exitKey}' to quit.");

                var input = Console.ReadLine().ToLower().Trim().Split(' ');
                switch (input[0].Trim() ?? string.Empty)
                {
                    case helpCommand:
                        Console.WriteLine("Usage: [Command] [ProgramId]");
                        Console.WriteLine($"Commands: {startCommand}, {killCommand}, {restartCommand}");
                        Console.WriteLine($"ProgramIds: {string.Join(", ", manager.GetProcessIds())}");
                        break;
                    case startCommand:
                        manager.StartTask(input[1].Trim());
                        break;
                    case killCommand:
                        manager.StopTask(input[1].Trim());
                        break;
                    case restartCommand:
                        manager.RestartTask(input[1].Trim());
                        break;
                    case exitKey:
                        shouldRun = false;
                        
                        break;
                    default:
                        break;
                }
            }
            manager.StopAllTasks();
            Console.WriteLine("All processes have been stopped. Press enter to exit...");
            Console.ReadLine();
        }

        public static Process CreateMongoProcess()
        {
            return new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = $"C:/Program Files/MongoDB/Server/{version}/bin/mongod.exe",
                    Arguments = $"--dbpath {dbPath}",
                    CreateNoWindow = false,
                },
            };
        }

        public static Process CreateNPMProcess()
        {
            var applicationRoot = Directory.GetParent(Directory.GetCurrentDirectory()).ToString();
            return new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    WorkingDirectory = Path.Combine(applicationRoot, npmRelativePath),
                    FileName = "C:/Program Files/nodejs/npm.cmd",
                    Arguments = "run watch",
                    CreateNoWindow = false,
                }
            };
        }


    }
}