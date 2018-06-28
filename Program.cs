using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json.Linq;
using System.IO;

namespace AureliaDotnetTemplate
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static string EnvironmentVariable = "";

        public static IWebHost BuildWebHost(string[] args)
        {

            string currentDirectoryPath = Directory.GetCurrentDirectory();
            string envSettingsPath = Path.Combine(currentDirectoryPath, "envsettings.json");
            JObject envSettings = JObject.Parse(File.ReadAllText(envSettingsPath));
            string environmentValue = envSettings["ASPNETCORE_ENVIRONMENT"].ToString();

            EnvironmentVariable = string.IsNullOrEmpty(environmentValue) ? "Production" : environmentValue;
  
            return WebHost.CreateDefaultBuilder(args)
                .UseEnvironment(EnvironmentVariable)
                .UseStartup<Startup>()
                .UseUrls("http://localhost:5000/")
                .Build();
        }
    }
}
