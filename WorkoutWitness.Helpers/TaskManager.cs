using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace WorkoutWitness.Helpers
{
    public class TaskManager
    {
        private Dictionary<string, Process> TaskDictionary { get; set; }

        public TaskManager()
        {
            TaskDictionary = new Dictionary<string, Process>();
        }

        public void AddProcess(string id, Process process)
        {
            if (TaskDictionary.ContainsKey(id)) return;
            TaskDictionary.Add(id, process);
        }

        public IEnumerable<string> GetProcessIds()
        {
            return TaskDictionary.Keys;
        }


        public void RestartTask(string id)
        {
            if (!TaskDictionary.ContainsKey(id)) return;
            TaskDictionary[id].EnableRaisingEvents = true;
            TaskDictionary[id].Exited += OnRestartTask;

            TaskDictionary[id].Kill();
            
        }

        private void OnRestartTask(object sender, EventArgs e)
        {
            var process = (Process)sender;
            process.Start();
            process.Exited -= OnRestartTask;
        }

        public void StartTask(string id)
        {
            if (!TaskDictionary.ContainsKey(id)) return;
            TaskDictionary[id].Start();
        }

        public void StopTask(string id)
        {
            if (!TaskDictionary.ContainsKey(id)) return;
            if (TaskDictionary[id].HasExited) return;
            TaskDictionary[id].Kill();
        }

        public void StopAllTasks()
        {
            foreach (var kvp in TaskDictionary)
            {
                if (!kvp.Value.HasExited)
                {
                    kvp.Value.Kill();
                }
            }
        }
    }
}
